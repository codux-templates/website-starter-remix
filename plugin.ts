import type { Plugin } from 'vite';

const coduxBoardRendererModuleId = 'virtual:codux/board-renderer';
const coduxBoardRendererModule = `
import React from 'react';
import '/_codux/board-global-setup.ts';
export default () => {
  const search = new URLSearchParams(window.location.search);
  const boardPath = search.get("boardPath");
  const LazyBoard = boardPath
    ? React.lazy(() =>
        import( /* @vite-ignore */ boardPath).then((boardExport) => {
          return { default: boardExport.default.Board };
        })
      )
    : () => <p> no board path in url :(</p>;

  return (
    <div>
      <React.Suspense>
        <LazyBoard />
      </React.Suspense>
    </div>
  );
};
`;
const coduxMainModuleId = 'virtual:codux/main';
const coduxMainModule = `import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserHistory, createRouter } from "@remix-run/router";
import BoardRouter from '${coduxBoardRendererModuleId}'
const router = createRouter({
      routes: [{
        path: '/',
      }],
      history: createBrowserHistory(),
      basename: '/',
    });

window.__remixRouter = router;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BoardRouter/>

    </React.StrictMode>
);`;

const coduxHtmlModuleId = '_codux-board-render';
const coduxHtml = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boards</title>
    </head>
    <body>
        <div id="root"></div>
        
        <script type="module" src="/@id/__x00__virtual:remix/inject-hmr-runtime"></script>
        <script type="module" src="/${coduxMainModuleId}"></script>
    </body>
</html>
`;

export default function coduxBoardPlugin(): Plugin {
    const PREFIX = '';

    return {
        name: 'remix-codux-board',
        enforce: 'pre',
        resolveId(id) {
            if (id === '/' + coduxMainModuleId) {
                return PREFIX + coduxMainModuleId + '.tsx';
            }

            if (id === coduxBoardRendererModuleId) {
                return PREFIX + coduxBoardRendererModuleId + '.tsx';
            }
        },

        load(id) {
            if (id === PREFIX + coduxMainModuleId + '.tsx') {
                return coduxMainModule;
            }
            if (id === PREFIX + coduxBoardRendererModuleId + '.tsx') {
                return coduxBoardRendererModule;
            }
        },

        configureServer: (server) => {
            const { config, middlewares, transformIndexHtml } = server;

            middlewares.use(async (req, res, next) => {
                if (res.writableEnded) {
                    return next();
                }

                const url = (req as any).url as string;
                const parsedUrl = new URL(url, 'http://localhost');
                if (parsedUrl.pathname === '/' + coduxHtmlModuleId) {
                    try {
                        Object.entries(config?.server?.headers || {}).forEach(([key, value]) => {
                            res.setHeader(key, value!);
                        });
                        res.setHeader('Content-Type', 'text/html');
                        res.statusCode = 200;
                        return res.end(await transformIndexHtml(url, coduxHtml, req.originalUrl));
                    } catch (e) {
                        return next(e);
                    }
                }
                return next();
            });
        },
    };
}
