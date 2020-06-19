import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class AppServices{

    constructor(
        private http: HttpClient
    ){}

    //public serverUrl = environment.serverUrl;
    
}