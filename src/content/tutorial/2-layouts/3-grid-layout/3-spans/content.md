---

type: lesson  
title: Spanning elements
focus: /tutorial.component.html
editor:
  fileTree: false
slug: grid-spans
---

## Spanning Rows and Columns

You can make an element span multiple rows or columns by setting the `rowSpan` and `colSpan` properties. 

In the following example, the second child element spans two rows:

```xml
<GridLayout rows="auto * *" columns="* auto *">
  <!-- Row 1 -->
  <Label row="0" col="0">Row 1, Col 1</Label>
  <Label row="0" col="1">Row 1, Col 2</Label>
  <Label row="0" col="2">Row 1, Col 3</Label>

  <!-- Row 2 -->
  <Label row="1" col="0">Row 2, Col 1</Label>
  <Label row="1" col="1" colSpan="2">Row 2, Col 2 & 3</Label>

</GridLayout>
```

Try to use `rowSpan` to make the last `Label` span multiple rows:

```xml
<Label row="1" col="1" colSpan="2" rowSpan="2">Row 2, Col 2 & 3</Label>
```
