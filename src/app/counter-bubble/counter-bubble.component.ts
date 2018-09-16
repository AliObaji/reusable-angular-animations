import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { slideOutAnimation } from '../reusable-animations';

@Component( {
  selector: 'app-counter-bubble',
  templateUrl: './counter-bubble.component.html',
  styleUrls: ['./counter-bubble.component.css'],
  animations: [
    trigger( 'slideOutAnimation', [
      transition(
        ':increment',
        useAnimation( slideOutAnimation, {
          params: {
            timings: '400ms cubic-bezier(.11,.99,.83,.43)',
            to: '0'
          }
        } )
      )
    ] )
  ]
} )
export class CounterBubbleComponent implements OnInit {
  
  @HostBinding( '@userCountIncreased' )
  @Input()
  userCounter: number;
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
