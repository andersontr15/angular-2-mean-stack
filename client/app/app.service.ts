import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

 @Injectable()
 export class HumanService {

     constructor(private http: Http) {} 

     getHumans() {
         return this.http.get('/api/human')
                    .map(response => response.json());
     }

     addHuman(human) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/human", JSON.stringify(human), { headers: headers }) .map(response => response.json());
     }

     viewHuman(id) {
         console.log('in human service' + id);
         return this.http.get('/api/humans/'+id)
                    .map(response => response.json());
     }

     removeHuman(id) {
         return this.http.delete("/api/humans/"+ id)
                .map(response => response.json());
     }

 }