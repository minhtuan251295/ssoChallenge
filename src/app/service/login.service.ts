import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Http, Headers, Response } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LogInService{
    
    //Check when email and password filled
    emailEmit = new Subject<string>();
    passEmit = new Subject<string>();

    
    //Create JWT
    public createJwt(user): Observable<any>{
        let apiCreateJwt = "/jwt";
        let header = new Headers({
            'Content-Type' : 'application/json; charset=utf-8',
        });
        let observer = 
        this.http.post(apiCreateJwt, 
                       user,
                       {headers: header}).pipe(map((res:Response) => res.json())) 
        ;
        return observer;
    }

    //Verify
    public verifyJwt(): Observable<any>{
        const token = localStorage.getItem("jwt_token");
        let apiVerifyJwt = `/jwt?token=${token}&fingerprint=fingerprint`;
        let observer =
        this.http.get(apiVerifyJwt).pipe(map((res:Response) => res.json()));
        return observer;
    }

    //get info
    public getUser(): Observable<any>{
        const token = localStorage.getItem("jwt_token");
        let apiGetUser = `/me`;
        let header = new Headers({
            'Authorization' : "Bearer " + token,
            'X-Fingerprint' : 'fingerprint'
        });
        let observer =
        this.http.get(apiGetUser, {headers: header}).pipe(map((res:Response) => res.json()));
        return observer;

    }
    constructor(private http:Http){}
}