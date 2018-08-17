import { Component } from '@angular/core';

import { ActorsPage } from '../actors/actors';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ActorsPage;

  constructor() {

  }
}
