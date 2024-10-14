import { Component, NgZone, inject } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { Canvas } from '@nativescript/canvas';

registerElement('Canvas', () => Canvas);

@Component({
  selector: 'app-canvas-background',
  standalone: true,
  template: ` <Canvas iosOverflowSafeArea="true" backgroundColor="#0546FF" (ready)="onReady($event)"></Canvas> `,
})
export class CanvasBackgroundComponent {
  colors = [/*'#0546FF', '#5C44E4',*/ '#8514F5', '#F637E3', '#E90464', '#F11653', '#FA2C04'];
  points: any[] = [];
  ngZone = inject(NgZone);
  canvas;
  ctx;

  onReady(event) {
    this.canvas = event.object;
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    this.initializePoints();
    this.animate();
  }

  initializePoints() {
    const numPoints = this.colors.length;
    for (let i = 0; i < numPoints; i++) {
      this.points.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        color: this.colors[i],
      });
    }
  }

  updatePoints() {
    for (let point of this.points) {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x <= -(this.canvas.width / 2) || point.x >= this.canvas.width + this.canvas.width / 2) point.vx *= -1;
      if (point.y <= -(this.canvas.height / 2) || point.y >= this.canvas.height + this.canvas.height / 2)
        point.vy *= -1;
    }
  }

  drawPhasingGradient() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let point of this.points) {
      let gradient = this.ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, this.canvas.width);
      gradient.addColorStop(0, point.color + 'F0');
      gradient.addColorStop(0.4, point.color + '70');
      gradient.addColorStop(1, point.color + '00');

      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  animate() {
    this.updatePoints();
    this.drawPhasingGradient();
    this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => this.animate()));
  }

  resizeCanvas() {
    this.canvas.width = this.canvas.getMeasuredWidth();
    this.canvas.height = this.canvas.getMeasuredHeight() + 200;
  }
}
