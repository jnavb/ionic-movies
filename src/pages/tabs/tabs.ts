import { Component } from '@angular/core';

import { ActorsPage } from '../actors/actors';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  private tab1Root = HomePage;
  private tab2Root = ActorsPage;

  constructor() {

  }
}
