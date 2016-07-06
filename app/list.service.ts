/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { Injectable } from '@angular/core';

import { List } from './list';
import { TODO } from './mock-list';

@Injectable()
export class ListService {
  getTodo() {
    return Promise.resolve(TODO);
  }
}
