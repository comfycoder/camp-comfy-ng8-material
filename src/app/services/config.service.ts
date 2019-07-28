import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'assets/config.json';
  private _config: Config;

  constructor(private http: HttpClient) { }

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  load(): Promise<any> {

    this._config = null;

    return this.http
      .get(this.configUrl)
      .toPromise()
      .then((data: any) => {
        this._config = <Config>data;
      })
      .catch((err: any) => Promise.resolve());
  }

  get config(): Config {
    return this._config;
  }

  setConfigData(config: Config) {
    this._config = config;
  }
}
