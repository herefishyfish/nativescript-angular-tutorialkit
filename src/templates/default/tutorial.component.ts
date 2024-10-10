import { Component, NO_ERRORS_SCHEMA } from "@angular/core";

@Component({
  standalone: true,
  selector: "tutorial",
  templateUrl: "./tutorial.component.html",
  styleUrls: ["./tutorial.component.css"],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TutorialComponent {
  title = "Welcome to Angular NativeScript";
}