import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthManager implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let token = window.localStorage.getItem('token')
        if (token && token.length > 0) {
            return true;
        }
        console.log("You must login");
        this.router.navigate(['/login']);
        return false;
    }
}