import { Injectable } from '@angular/core';

import * as a from '@angular/flex-layout';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  number: any = Math.random();
  constructor(
    private mediaObserver: MediaObserver
  ) {
    this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.number = change.mqAlias;
      console.log(this.number);
    });
  }
}
