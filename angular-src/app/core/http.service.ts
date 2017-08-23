import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

import {
    Http,
    Response,
    RequestOptions,
    URLSearchParams
} from '@angular/http';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    get(url: string, properties?: Array<string>, orderBy?: string, skip?: number, take?: number): Observable<any> {

        let queryParams: URLSearchParams = new URLSearchParams();
        if (properties) {
            queryParams.set('properties', properties.join(','));
        }
        if (orderBy) {
            queryParams.set('orderBy', orderBy);
        }
        if (skip) {
            queryParams.set('skip', skip.toString());
        }
        if (take) {
            queryParams.set('take', take.toString());
        }
        let options: RequestOptions = new RequestOptions({ params: queryParams });

        return this.http.get(url, options)
                .map(this.extractData)
                .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'ERROR';
        console.error(error, errMsg);
        return Observable.throw(errMsg);
    }

}
