---

type: lesson  
title: Layering Elements
focus: /tutorial.component.html
editor:
  fileTree: false
slug: grid-layering
---

## Layering Elements on the Grid

`GridLayout` lets you layer elements, allowing them to overlap within the same cell or across multiple cells. The layering is controlled by the order of elements in your markup - elements declared later appear on top of earlier ones. So you can place background elements behind others or overlay elements on top.

Let's say we want to add a `StackLayout` or `Image` that serves as a background for certain rows and columns in our grid - we could do:
```xml
<GridLayout rows="* * *" columns="* * *">
  <StackLayout rowSpan="2" colSpan="2" class="bg-blue-300"></StackLayout>

  <!-- Row 1 -->
  <Label row="0" col="0">Row 1, Col 1</Label>
  <Label row="0" col="1">Row 1, Col 2</Label>
  <Label row="0" col="2">Row 1, Col 3</Label>

  <!-- Row 2 -->
  <Label row="1" col="0">Row 2, Col 1</Label>
  <Label row="1" col="1">Row 2, Col 2</Label>
  <Label row="1" col="2">Row 2, Col 3</Label>

  <!-- Row 3 -->
  <Label row="2" col="0">Row 3, Col 1</Label>
  <Label row="2" col="1">Row 3, Col 2</Label>
  <Label row="2" col="2">Row 3, Col 3</Label>
</GridLayout>
```

Try and get the stack layout to span across all 3 rows and columns.
```xml
<StackLayout rowSpan="3" colSpan="3" class="bg-blue-300"></StackLayout>
```

By setting `rowSpan="3"` and `colSpan="3"`, the `StackLayout` now covers all three rows and all three columns, effectively filling the entire grid area.
Experiment with different values for `rowSpan` and `colSpan` to see how they affect the layout. You can also change the order of the elements to see how layering changes.
