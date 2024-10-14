import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { Page, Utils, alert, isIOS } from '@nativescript/core';
import { CanvasBackgroundComponent } from '../canvas-background.component';

@Component({
  standalone: true,
  selector: 'battery-example',
  templateUrl: './battery-example.component.html',
  styleUrls: ['./battery-example.component.css'],
  imports: [CanvasBackgroundComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BatteryExampleComponent {
  // 👇 Leverage native APIs to get the battery level! 
  getBatteryLevel() {
    const formatMessage = (level: any) => `The Battery Level is: ${level}%`;

    let value = 0;
    if (isIOS) {
      // iOS direct native access! 🚀
      value = UIDevice.currentDevice.batteryLevel * 100;
    } else {
      // Android direct native access! 👀
      const context = Utils.android.getApplicationContext();
      const bm = context.getSystemService('batterymanager');
      value = bm.getIntProperty(4);
    }

    alert(formatMessage(value));
  }


  private _page = inject(Page);
  constructor() {
    this._page.actionBarHidden = true;
  }
}
