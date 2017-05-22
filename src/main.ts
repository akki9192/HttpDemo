import { Component,Injectable,Inject,OnInit,NgModule,enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/Rx'; 
import { IGuest } from './models/guest';
import { GuestService } from './guest.service';
enableProdMode();

@Component({
  selector: 'my-app',
  templateUrl: 'src/main.component.html',
  providers: [ GuestService ]
})


export class GuestComponent implements OnInit{
   private guests:IGuest[];
    private errorMessage:any;
    
    constructor(@Inject(GuestService) private service:GuestService){
        
    }
    
    ngOnInit():void{
         this.service.getAllGuests().subscribe(guests=>this.guests = guests,error=>this.errorMessage=error);
    }
}

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ GuestComponent ],
  bootstrap:    [ GuestComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

  