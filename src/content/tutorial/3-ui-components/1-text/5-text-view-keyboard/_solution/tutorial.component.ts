import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { alert, TextField, type EventData } from '@nativescript/core';

@Component({
  standalone: true,
  selector: 'tutorial',
  template: `
    <StackLayout>
      <TextField
        class="m-4 p-2"
        hint="Enter text"
        keyboardType="next"
        returnKeyType="search"
        (returnPress)="onReturnPress($event)">
      </TextField>
      <TextField
        class="m-4 p-2"
        hint="Enter text"
        keyboardType="number"
        returnKeyType="done"
        (returnPress)="onReturnPress($event)">
      </TextField>
    </StackLayout>
  `,
  schemas: [NO_ERRORS_SCHEMA],
})
export class TutorialComponent {
  onReturnPress(args: EventData) {
    const textField = args.object as TextField;
    alert({
      title: 'Return Pressed',
      message: `Hello, ${textField.text}!`,
      okButtonText: 'Great',
    });
  }
}
