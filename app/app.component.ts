import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { List } from './list';
import { HeroDetailComponent } from './list-detail.component';
import { HeroService } from './list.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My ToDo List</h2>
    <ul class="a">
      <li *ngFor="let list of a"
        [class.selected]="list === selectedHero"
        (click)="onSelect(list)">
        <span class="badge">{{list.id}}</span> {{list.name}}
      </li>
    </ul>
    <my-list-detail [list]="selectedHero"></my-list-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .a {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .a li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .a li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .a li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .a .text {
      position: relative;
      top: -3px;
    }
    .a .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'List To perform';
  a: List[];
  selectedHero: List;

  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(a => this.a = a);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(list: List) { this.selectedHero = list; }
}
