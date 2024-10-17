---
type: lesson
title: Stack Layouts
focus: /tutorial.component.html
slug: stack-layout
editor:
  fileTree: false
---

# Stack Layouts

In NativeScript, the **StackLayout** is a fundamental layout container that arranges its child elements in a vertical or horizontal stack. By default, it stacks elements vertically, one after another, in the order they are declared.

When you add multiple UI elements directly to a page without a layout container, they may overlap because of their inherited native view parent.
In this case, both Label elements will occupy the same position on the screen, causing them to overlap each other.

To arrange these labels so they appear one after the other, you can wrap them inside a StackLayout:

```xml
<StackLayout>
  <Label>A Label</Label>
  <Label>Another Label</Label>
</StackLayout>
```
