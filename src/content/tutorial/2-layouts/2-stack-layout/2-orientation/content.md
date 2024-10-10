---

type: lesson  
title: Orientation 
focus: /tutorial.component.html  
editor:
  fileTree: false

---

# StackLayout Orientation

By default, the `StackLayout` stacks elements vertically.

## Changing the Orientation

You can change the stacking direction by setting the `orientation` property to `"horizontal"` or `"vertical"`.

### Vertical Orientation

Here's how a `StackLayout` with vertical orientation looks:

```xml
<StackLayout>
  <Label>Item 1</Label>
  <Label>Item 2</Label>
  <Label>Item 3</Label>
</StackLayout>
```
In this example, the items are stacked one below the other.

### Horizontal Orientation
To stack elements horizontally, set the orientation property to "horizontal":

```xml
<StackLayout orientation="horizontal">
  <Label>Item 1</Label>
  <Label>Item 2</Label>
  <Label>Item 3</Label>
</StackLayout>
```
Now, the items are arranged side by side.
