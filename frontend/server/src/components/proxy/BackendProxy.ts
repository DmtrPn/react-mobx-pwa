import { Proxy } from './Proxy';
import { Config, ConfigName, ServicesConfig } from '@core/config';

import { Request } from '@core/types';

class BackendProxy extends Proxy {

    protected targetUrl = Config.getConfig<ServicesConfig>(ConfigName.Services).backend;

    protected makeHeaders(req: Request): { [header: string]: string } {
        const user = req.session.passport?.user;
        const headers = {
            requestId: req.id,
            user: user ? encodeURI(JSON.stringify(user)) : null,
        };
        return headers;
    }
}

export const backendProxy = new BackendProxy();
