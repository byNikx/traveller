import { Directive, OnInit, HostBinding } from '@angular/core';
import { LayoutService } from '../services/layout.service';


@Directive({
  selector: '[nxContainer]',
})
export class ContainerDirective implements OnInit {

  constructor(
    layout: LayoutService
  ) {
  }

  @HostBinding('class') containerClass: string;

  ngOnInit(): void {

  }

}
