---

type: lesson  
title: Grid Layouts 
focus: /tutorial.component.html
editor:
  fileTree: false  

---

# Grid Layouts

In NativeScript, the **GridLayout** is a layout container that arranges its child elements in rows and columns. It is a versatile layout that provides a flexible way to position UI elements in a grid.

## Defining a Grid Layout

To define a GridLayout, you can use the `<GridLayout>` tag. Inside the GridLayout, you can add any number of child elements, each with its own row and column index.

Here's an example of a GridLayout with three rows and three columns:

```xml
<GridLayout rows="auto, *, auto" columns="*, auto, *">
  <!-- Row 1 -->
  <Label row="0" col="0">Row 1, Col 1</Label>
  <Label row="0" col="1">Row 1, Col 2</Label>
  <Label row="0" col="2">Row 1, Col 3</Label>

  <!-- Row 2 -->
  <Label row="1" col="0">Row 2, Col 1</Label>
  <Label row="1" col="1">Row 2, Col 2</Label>
  <Label row="1" col="2">Row 2, Col 3</Label>
</GridLayout>
```

In the above example, the GridLayout has three rows and three columns. The `rows` and `columns` properties define the size of the rows and columns. The `row` and `col` properties of each child element define the row and column index where the element should be placed.

Try and add three more labels into the third row:
```xml
  <!-- Row 3 -->
  <Label row="2" col="0">Row 2, Col 1</Label>
  <Label row="2" col="1">Row 2, Col 2</Label>
  <Label row="2" col="2">Row 2, Col 3</Label>
```
