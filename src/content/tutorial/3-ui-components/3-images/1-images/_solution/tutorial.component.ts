import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  standalone: true,
  template: `<Image src="~/images/sample.png" class="custom-image" stretch="aspectFill"></Image>`,
  styles: [
    `
      .custom-image {
        border: 2px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
    `,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TutorialComponent {}
