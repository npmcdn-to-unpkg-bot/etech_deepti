import { Component, OnInit } from '@angular/core';
import { List } from './list';
import { ListService } from './list.service';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <h2>My ToDo List</h2>
    <ul class="li">
      <li *ngFor="let list of li"  [class.selected]="list === selectedHero">
       {{list.id}} {{list.name}}
      </li>
    </ul>  `
    ,

  providers: [ListService]
})
export class AppComponent implements OnInit {
  title = 'List';
  li: List[];
  selectedHero:List;
  constructor(private listService: ListService) { }
  getTodo() {
    this.listService.getTodo().then(li => this.li = li);
  }

  ngOnInit() {
    this.getTodo();
  }

  
}