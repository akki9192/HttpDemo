import { Injectable,Inject } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IGuest } from './models/guest';

@Injectable()
export class GuestService{
    
    private url = 'src/api/guests/guests.json';
    
    constructor(@Inject(Http) private http:Http){
        
    }
    
    getAllGuests():Observable<IGuest[]>{
        return this.http.get(this.url).map((response:Response)=><IGuest[]>response.json()).catch(this.handleError);
    }
    
    private handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}