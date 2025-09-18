import {renderToPipeableStream} from 'react-dom/server';
import {isbot} from 'isbot';
import {Controller, serializeState, servePipeableStream} from '@t8/webapp-core';
import {titleMap} from '../const/titleMap';
import type {SerializableAppState} from '../types/SerializableAppState';
import {App} from '../ui/App';
import {toAppState} from '../utils/toAppState';

export const render: Controller = () => {
    return async (req, res) => {
        let {id} = req.params;

        if (id && (!/^\d+$/.test(id) || Number(id) > 2)) {
            res.status(404).send(
                await req.app.renderStatus?.(req, res, 'unknown_section'),
            );
            return;
        }

        let state: SerializableAppState = {
            title: titleMap[req.path] ?? 'App',
            counter: 100 + Math.floor(100*Math.random()),
        };

        let app = <App location={req.originalUrl} state={toAppState(state)}/>;

        let bot = isbot(req.get('user-agent'));
        let serve = servePipeableStream(req, res);
        let renderingError: unknown;

        let stream = renderToPipeableStream(app, {
            onShellReady() {
                if (!bot) serve(stream, renderingError);
            },
            onShellError(error) {
                renderingError = error;
                serve(stream, renderingError);
            },
            onAllReady() {
                if (bot) serve(stream, renderingError);
            },
            onError(error) {
                renderingError = error;
            },
            bootstrapModules: ['/-/main/index.js'],
            bootstrapScriptContent: `window._mainState=${serializeState(state)};`,
            nonce: req.ctx.nonce,
        });
    };
};
