import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <Button [text]="buttonText" [isEnabled]="isButtonEnabled" (tap)="onButtonTap()"></Button>
  `,
  schemas: [NO_ERRORS_SCHEMA],
})
export class TutorialComponent {
  buttonText: string = "Submit";
  isButtonEnabled: boolean = true;

  onButtonTap(): void {
    this.buttonText = "Submitted";
    this.isButtonEnabled = false;
    console.log("Form submitted!");
  }
}
