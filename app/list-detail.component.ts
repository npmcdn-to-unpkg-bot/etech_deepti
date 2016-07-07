
import { Component, Input } from '@angular/core';
import { List } from './list';

@Component({
  selector: 'my-list-detail',
  template: `
    <div *ngIf="list">
      <h2>{{list.name}} details!</h2>
      <div>
        <label>id: </label>{{list.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="list.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() list: List;
}
