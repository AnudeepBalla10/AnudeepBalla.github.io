import { Component, HostListener, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "baner",
  templateUrl: "./baner.component.html",
  styleUrls: ["./baner.component.css"],
  animations: [
    trigger("scrollAnimation", [
      state(
        "show",
        style({
          opacity: 1,
          transform: "translateX(0)",
        }),
      ),
      state(
        "hide",
        style({
          opacity: 0,
          transform: "translateX(-100%)",
        }),
      ),
      transition("show => hide", animate("700ms ease-out")),
      transition("hide => show", animate("700ms ease-in")),
    ]),
  ],
})
export class BanerComponent implements OnInit {
  state = "hide";

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const element = document.querySelector(".animate");
    if (element) {
      const componentPosition = element.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition) {
        this.state = "show";
      } else {
        this.state = "hide";
      }
    }
  }
}
