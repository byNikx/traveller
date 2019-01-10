import { Directive, OnInit, HostBinding } from '@angular/core';
import { LayoutService } from '../services/layout.service';


@Directive({
  selector: '[nxContainer]',
})
export class ContainerDirective implements OnInit {

  constructor(
    public layout: LayoutService
  ) {
  }

  @HostBinding('class') containerClass: string = this.layout.number;

  ngOnInit(): void {

  }

}
