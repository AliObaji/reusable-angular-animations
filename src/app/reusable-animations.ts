// create the animation
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export const pulseAnimation = animation([
  style({transform: 'scale(1)'}),
  animate(
    '{{timings}}',
    keyframes([
      style({transform: 'scale(1)', offset: 0}),
      style({transform: 'scale({{scale}})', offset: 0.5}),
      style({transform: 'scale(1)', offset: 1})
    ])
  )
]);

export const slideOutAnimation = animation([
  animate(
    '{{timings}}',
    style({transform: 'translateY({{ to }})', opacity: 0})
  )
]);
