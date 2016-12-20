import { Component,AfterViewInit,ElementRef } from '@angular/core';

declare var Ultima: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    Ultima.init(this.el.nativeElement);
  }
}