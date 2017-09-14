import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RequestHandlerService {
    private apiEndpointUrl = '';
    private VERSION = '1.0';

    constructor(private http: Http,
                private router: Router,
                private location: Location) {
    }

    /* upgrade http function for test to using other apiEndpoitnUrl than global apiEndpointUrl variable */
    public getEffects(path: string, parameters?: any, apiEndpointUrl?: string) {
        const url = (apiEndpointUrl ? apiEndpointUrl : this.apiEndpointUrl) + path;
        return this.http.get(url, parameters);
    }

    public get(path: string, parameters?: any, apiEndpointUrl?: string) {
        return this.getEffects(path, parameters, apiEndpointUrl)
            .map((response) => {
                if (response.status === 204) {
                    return {};
                }
                const json = response.json();
                /* TODO: to remove, now for test when we don't use esb and get data from mock adapter we don't get payload */
                return json.payload || json.content || json || {};
            })
            .catch((e) => {
                return this.logError(e);
            });
    }

    public logError(err: any, identity?: string) {
        if (err.json().responseTransportStatus === 'BASIC_AUTHORIZATION_REQUIRED') {
            const headers: Headers = err.headers;
            // this.handleAuthorization(headers.get('Location') || headers.get('location'));
        } else {
            if (identity) {
                console.error('Request error with identity: %s', identity, err, err.json());
            } else {
                console.error('Request error: ', err, err.json());
            }
        }
        const e = err.json().message || err.json();
        return Observable.throw(err.message || e);
    }

    /*public handleAuthorization(location) {
        this.appState.set('authUrl', location);
        this.appState.set('previousLocationAuth', this.location.path());
        if (this.appState.get('previousLocationAuth') !== '/login') {
            this.appState.set('previousLocation', this.location.path());
            this.router.navigate(['\login']);
        }
    }*/

    public postEffects(path: string, parameters: any, apiEndpointUrl?: string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers});
        const url = (apiEndpointUrl ? apiEndpointUrl : this.apiEndpointUrl) + path;
        parameters = Object.assign({}, parameters);
        if (typeof parameters === 'object') {
            parameters.version = parameters.version ? parameters.version : this.VERSION;
            parameters.identity = parameters.identity ? parameters.identity : 0;
        }
        parameters.publicId = parameters.identity;
        return this.http.post(url, parameters, options);
    }

    public post(path: string, parameters: any, apiEndpointUrl?: string) {
        return this.postEffects(path, parameters, apiEndpointUrl)
            .catch((e) => {
                return this.logError(e, parameters.identity);
            });
    }

    public putEffects(path: string, parameters: any, apiEndpointUrl?: string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers});
        const url = (apiEndpointUrl ? apiEndpointUrl : this.apiEndpointUrl) + path;
        parameters = Object.assign({}, parameters);
        if (typeof parameters === 'object') {
            parameters.version = parameters.version ? parameters.version : this.VERSION;
            parameters.identity = parameters.identity ? parameters.identity : 0;
        }
        return this.http.put(url, parameters, options);
    }

    public put(path: string, parameters: any, apiEndpointUrl?: string) {
        return this.putEffects(path, parameters, apiEndpointUrl)
            .catch((e) => {
                return this.logError(e, parameters.identity);
            });
    }

    public delete(path: string, parameters?: any, apiEndpointUrl?: string) {
        const url = (apiEndpointUrl ? apiEndpointUrl : this.apiEndpointUrl) + path;
        return this.http.delete(url, parameters)
            .catch((e) => {
                return this.logError(e);
            });
    }
}

export interface IGetListParam {
    page: number;
    size: number;
}
