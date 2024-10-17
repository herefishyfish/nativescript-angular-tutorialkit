import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from '@nativescript/angular';

@Component({
  standalone: true,
  selector: 'tutorial',
  template: `
    <StackLayout class="p-5">
      <TextField
        class="border border-gray-300 p-2 mb-4 text-base"
        [(ngModel)]="username"
        hint="Enter your username">
      </TextField>
      <TextField
        class="border border-gray-300 p-2 mb-4 text-base"
        [(ngModel)]="message"
        hint="Enter a secure message"
        secure="true">
      </TextField>

      <Label class="text-base text-gray-700 mb-2">Username: {{ username }}</Label>
      <Label class="text-base text-gray-700 mb-2">Message: {{ message }}</Label>
    </StackLayout>
  `,
  imports: [NativeScriptFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TutorialComponent {
  username = "";
  message = "";
}
