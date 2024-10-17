---

type: lesson  
title: Orientation 
focus: /tutorial.component.html  
editor:
  fileTree: false
slug: stack-layout-orientation

---

# Changing the Orientation

You can change the stacking direction by setting the `orientation` property to `"horizontal"` or `"vertical"`. By default, the `StackLayout` stacks elements vertically.

Try to stack elements horizontally, by setting the orientation property to "horizontal":

```xml
<StackLayout orientation="horizontal">
  <Label>Item 1</Label>
  <Label>Item 2</Label>
  <Label>Item 3</Label>
</StackLayout>
```
Now, the items are arranged side by side.
