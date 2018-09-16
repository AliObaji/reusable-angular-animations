import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { pulseAnimation } from '../reusable-animations';

@Component({
  selector: 'app-clap-fab',
  templateUrl: './clap-fab.component.html',
  styleUrls: ['./clap-fab.component.css'],
  animations: [
    trigger('counterChange',[
      transition(
        ':increment',
        useAnimation(pulseAnimation,{
          params: {
            timings: '400ms cubic-bezier(.11,.99,.83,.43)',
            scale: 1.05
          },
        })
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClapFabComponent implements OnInit {

  constructor() { }
  
  @HostBinding('@counterChange')
  @Input()
  counter:number;

  ngOnInit() {
  }

}
