import { Component, Input } from '@angular/core';
import { List } from './list';

@Component({
  selector: 'my-list-detail',
  template: `
    <div *ngIf="list">
      <h2>{{list.name}} details!</h2>
      
      
    </div>
  `
})
export class ListDetailComponent {
  @Input() list: List;
}
