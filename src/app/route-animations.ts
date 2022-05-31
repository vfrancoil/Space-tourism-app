import { trigger, transition, style, query, group, animateChild, animate, keyframes, state } from "@angular/animations";

export const fade =
trigger('routeAnimations', [
  transition('* <=> *',[
    query(':enter, :leave',[
      style({
        position:'absolute',
        left:0,
        width:"100%",
        height:"100%",
        opacity:0
      })
    ], { optional: true }),
    query(':enter', [
      animate('.5s ease-in',
        style({ opacity:1})
      ),
    ], { optional: true })
  ])
]);

