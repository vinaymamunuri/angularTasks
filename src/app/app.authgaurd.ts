import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()

export class AuthGaurd implements CanActivate{

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
        return localStorage.getItem('token')? true:false
    }
}