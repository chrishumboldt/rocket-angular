/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';

import { RocketLaunchService, State } from '../../../rocket/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public value = 2;
  public options = [
    {
      body: 'Test One',
      value: 1
    },
    {
      body: 'Test Two',
      value: 2
    },
    {
      body: 'Test Three',
      value: 3
    }
  ];

  constructor(private rocketLaunch: RocketLaunchService) {}

  ngOnInit() {
    this.rocketLaunch.ignition();
  }

  public handleClick(): void {}
}
