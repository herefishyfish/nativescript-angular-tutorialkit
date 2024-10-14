import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Utils, alert, isIOS } from '@nativescript/core';

@Component({
  standalone: true,
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TutorialComponent {
  // 👇 Leverage native APIs to get the battery level! 
  getBatteryLevel() {
    const formatMessage = (level) => `The Battery Level is: ${level}%`;

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
}
