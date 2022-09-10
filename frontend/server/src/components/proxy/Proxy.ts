import { Response } from 'express';
import { ClientRequest } from 'http';
import httpProxy  from 'http-proxy';
import { Request } from '@core/types';
import autobind from 'autobind';

export interface ProxyRequestParams {
    req: Request;
    res: Response;
}

export abstract class Proxy {

    protected abstract targetUrl: string;
    protected proxyServer = httpProxy.createProxyServer({
        secure: process.env.CMS_ENV === 'development' ? false : undefined,
        changeOrigin: process.env.CMS_ENV === 'development' ? true : undefined,
    });

    constructor() {
        this.proxyServer.on('proxyReq', this.onRequest);
        this.proxyServer.on('error', this.onError);
    }

    public async proxyRequest({ req, res }: ProxyRequestParams) {
        req.url = this.formatUrl(req.url);
        const headers = this.makeHeaders(req);

        this.proxyServer.web(req, res as any, { headers, target: this.targetUrl });
    }

    @autobind
    protected onRequest(proxyReq: ClientRequest, req: Request, _: Response) {
        const contype = req.headers['content-type'];

        if (contype?.includes('multipart/form-data')) {
            // do nothing
        } else if (req.body) {
            this.formatContent(proxyReq, req);
        }
    }

    @autobind
    protected onError(err: Error, req: Request, res: Response) {
        res.writeHead(500, {
            'Content-Type': 'text/plain',
        });

        res.end(err.message);
    }

    protected formatContent(proxyReq: ClientRequest, req: Request) {
        const bodyData = JSON.stringify(req.body);

        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));

        proxyReq.write(bodyData);
    }

    protected getProxyUrl(req: Request): string {
        return `${this.targetUrl}${req.url.replace('/api', '')}`;
    }

    protected formatUrl(url: string): string {
        return url.replace('/api', '');
    }

    protected makeHeaders(_: Request): { [header: string]: string } {
        return  {};
    }

}
