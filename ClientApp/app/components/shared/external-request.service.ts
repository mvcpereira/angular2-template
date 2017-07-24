import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { User } from './user.type';

@Injectable()
export class ExternalRequestService {

    private _headers = new Headers({ 'Content-Type': 'application/json' });
    private _options = new RequestOptions({ headers: this._headers });
   
    constructor(private http: Http) {

    }

    getAllRecords() {
        return this.http.get(`http://localhost:51637/api/User/`, )
            .map(data => data.json() as User[])
            .toPromise();
    }

    getRecordById(id: number) {
        return this.http.get(`http://localhost:51637/api/User/${id}`)
            .map(data => data.json() as User)
            .toPromise();
    }

    updateUser(user: User) {
        console.log(JSON.stringify(user));
        return this.http.put(`http://localhost:51637/api/User/`, JSON.stringify(user), this._options)
            .toPromise();
    }

    insertUser(user: User) {
        console.log(JSON.stringify(user));
        return this.http.post(`http://localhost:51637/api/User/`, JSON.stringify(user), this._options)
            .toPromise();
    }
}
