import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <Image src="~/images/sample.png" stretch="aspectFill"></Image>
  `,
  styles: [``],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TutorialComponent {}
