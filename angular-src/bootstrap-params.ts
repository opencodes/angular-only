import { Injectable } from '@angular/core';

@Injectable()
export class BootstrapParams {
    public rootApiUrl: string;
    public googleMapKey: string;

    constructor(rootApiUrl: string, googleMapKey: string) {
        this.rootApiUrl = rootApiUrl;
        this.googleMapKey = googleMapKey;
    }
}
