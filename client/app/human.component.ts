import { Component } from '@angular/core';
import { HumanService } from './app.service';

@Component({
    selector: 'human',
    moduleId: module.id,
    templateUrl: 'human.html',
    providers: [HumanService]
})
export class HumanComponent {
    humans: Array<any>;
    name: string;
    age: number;
    specificHumanName: string;
    specificHumanAge: number;

    constructor(private humanService: HumanService) {
       humanService.getHumans().subscribe(response => {
           this.humans = response
       })
    }

    viewHuman(id){
        console.log('in component  with ' + id);
        this.humanService.viewHuman(id).subscribe(data => {
            this.specificHumanAge = data.age;
            this.specificHumanName = data.name;
        });
    }

    addHuman(){
        var human = {
            name: this.name,
            age: this.age
        }
        this.humanService.addHuman(human)
            .subscribe(data => {
                console.log('Success' + data)
                this.humans.push(human);
            })
    }

    removeHuman(id) {
        this.humanService.removeHuman(id)
            .subscribe(data => {
                console.log('Success deleting ' + data);
                
            })
    }

}