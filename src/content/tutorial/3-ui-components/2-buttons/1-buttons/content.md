---
type: lesson
title: Buttons
focus: /tutorial.component.ts
slug: ui-button
---

# Buttons

Buttons are a fundamental UI element used for triggering actions. We'll cover:
- Basic button setup
- Handling tap events
- Styling and theming buttons

## Basic Button Example

Here's how you can define a basic button in your template:

```html
<Button (tap)="handleTap($event)">Click Me</Button>
```

## Handling Tap Events

In your component (e.g. `/tutorial.component.ts`), you can add an event handler:

```ts
export function handleTap(): void {
  console.log("Button was tapped!");
}
```

Custom Styling
Our buttons can be styled using themes or custom CSS. For example:

```css
.button {
  background-color: var(--primary-color);
  border-radius: 4px;
  padding: 10px 20px;
}
```

## Try it out

Add a button to your app that logs a message when tapped:

```html
<Button label="Log Message" (tap)="logMessage($event)"></Button>
```

```ts
export function logMessage(): void {
  console.log("Message logged!");
}
```

## Native Elements

The Button component in NativeScript Core uses these native platform-specific elements:

- Android: `android.widget.Button`
- iOS: `UIButton`


