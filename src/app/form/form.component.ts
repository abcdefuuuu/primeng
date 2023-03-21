import { Component } from '@angular/core';

//先定義定義物件的類別
interface People {
  position?:number;
  name:string;
  height:number;
  weight:number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor() { }
  human: People[] = [];
  columns: any[] = [
    {
        name: "編號",
        field: "position",
    },
    {
        name: "姓名",
        field: "name",
    },
    {
        name: "身高",
        field: "height",
    },
    {
        name: "體重",
        field: "weight",
    },
];
    ngOnInit() {
      this.human = [
        { position: 1, name: 'Rose', height: 178, weight: 43 },
        { position: 2, name: 'Benny', height: 156, weight: 90 },
        { position: 3, name: 'Sam', height: 167, weight: 55 },
        { position: 4, name: 'Peggy', height: 183, weight: 54 },
        { position: 5, name: 'Claire', height: 163, weight: 73 },
        { position: 6, name: 'Jason', height: 180, weight: 67 },
        { position: 7, name: 'Alex', height: 195, weight: 70 },
        { position: 8, name: 'Kimberly', height: 159, weight: 53 },
        { position: 9, name: 'Millie', height: 165, weight: 63 },
        { position: 10, name: 'Poll', height: 182, weight: 67 },
        { position: 11, name: 'Grace', height: 173, weight: 61 },
        { position: 12, name: 'Veronica', height: 169, weight: 56 },
        { position: 13, name: 'Wendy', height: 150, weight: 45 },
        { position: 14, name: 'Rita', height: 158, weight: 50 },
    ];
    }
}
