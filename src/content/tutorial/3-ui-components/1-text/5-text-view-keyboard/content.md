---

type: lesson  
title: Keyboard
focus: /tutorial.component.ts  
slug: ui-keyboard
editor:
  fileTree: false
---
# Controlling the keyboard

## Keyboard Types
You can specify the type of keyboard that should appear when the user focuses on a `TextField` or `TextView`. This is helpful for optimizing input based on the expected data.

For example, to display a numeric keyboard:

```xml
<TextField hint="Enter your favorite number" keyboardType="number"></TextField>
```

Available keyboardType options include:

 - `datetime`
 - `phone`
 - `number`
 - `url`
 - `email`
 
## Return Key
You can customize the return key on the keyboard using the `returnKeyType` property:

```xml
<TextField hint="Search" returnKeyType="search"></TextField>
```

Common returnKeyType values are:

 - `done`
 - `next`
 - `go`
 - `search`
 - `send`

## Handling the Return Event
To respond when the user presses the return key, you can handle the `returnPress` event:

```xml
<TextField (returnPress)="onReturnPress($event)"></TextField>
```
