import { Component, HostBinding } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("fragmentAnimation", [
      transition("inactive => active", [
        style({ opacity: 0, transform: "scale(0.5)" }),
        animate("1s ease-out", style({ opacity: 1, transform: "scale(1)" })),
      ]),
      transition("active => inactive", [
        animate("1s ease-in", style({ opacity: 0, transform: "scale(0.5)" })),
      ]),
    ]),
  ],
})
export class AppComponent {
  onMouseMove(event: MouseEvent): void {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${event.clientX}px`;
    star.style.top = `${event.clientY}px`;
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1000);
  }

  @HostBinding("class.pc") pcMode = false;
  title = "Portfolio";
  animationState = "inactive";

  toggleAnimation() {
    this.animationState =
      this.animationState === "inactive" ? "active" : "inactive";
  }
}
