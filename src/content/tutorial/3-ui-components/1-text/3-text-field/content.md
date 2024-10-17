---
type: lesson
title: Text Fields
focus: /tutorial.component.ts
slug: ui-text-fields
editor:
  fileTree: false
---

# TextFields

The core `TextField` is essential for allowing users to input text in your app.

## Creating a TextField

To create a text field in NativeScript, use the <TextField> element:

```xml
<TextField hint="Enter your name"></TextField>
```

In this example, the text field displays a placeholder text "Enter your name" when it's empty. This hint helps users understand what input is expected.

## Binding Text Input

The NativeScript `TextField` binding requires the `NativeScriptFormsModule`.

```ts
import { NativeScriptFormsModule } from '@nativescript/angular';

@Component({
  ...
  imports: [NativeScriptFormsModule],
})
```

## Secure Text Entry

If you're collecting sensitive information like passwords, you can obscure the text input by setting the secure property to true:

```xml
<TextField secure="true"></TextField>
```

This will display dots or asterisks instead of the actual characters typed, providing privacy for the user's input.

## Try it out

Try and add a secure `TextField` for the `message` variable 🔐

```xml
<TextField
  class="border border-gray-300 p-2 mb-4 text-base"
  [(ngModel)]="message"
  hint="Enter a secure message"
  secure="true">
</TextField>
```

## Native Elements
The TextField component in NativeScript Core uses these native platform-specific elements:

 - **iOS**: `UITextField`
 - **Android**: `android.widget.EditText`
