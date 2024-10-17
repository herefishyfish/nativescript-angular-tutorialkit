---

type: lesson  
title: Defining rows and columns  
focus: /tutorial.component.html  
editor:
  fileTree: false
slug: grid-rows
---

# Rows & Columns

Defining rows and columns in a GridLayout is a key concept in building responsive NativeScript layouts. 

## Defining Columns

To define columns in a `GridLayout`, use the `columns` property, which accepts a comma or space-separated list of column sizes. There are three unit types for column sizing: `auto`, `*`, and `integers`.

- `auto`: Adjusts to fit the content size.
- `*`: Fills the available space.
- `integer`: Specifies a fixed size in device-independent pixels (dips).

Here's an example of a GridLayout with three columns of varying sizes:
```xml
<GridLayout columns="120 * auto">
  <Label class="bg-red-200" col="0">Column 1</Label>
  <Label class="bg-yellow-200" col="1">Column 2</Label>
  <Label class="bg-green-200" col="2">Column 3</Label>
</GridLayout>
```
In this example:

 - The first column has a fixed width of 120dips.
 - The second column expands to fill the available space.
 - The third column adjusts to fit its content size.

## Try It

Add a new GridLayout with three rows and three columns. Use different row and column sizes to create a unique layout. 
```xml
<GridLayout rows="auto 200 *" columns="* auto *">
  <!-- Row 1 -->
  <Label row="0" col="0" class="bg-red-200">Row 1, Col 1</Label>
  <Label row="0" col="1" class="bg-yellow-200">Row 1, Col 2</Label>
  <Label row="0" col="2" class="bg-green-200">Row 1, Col 3</Label>

  <!-- Row 2 -->
  <Label row="1" col="0" class="bg-blue-200">Row 2, Col 1</Label>
  <Label row="1" col="1" class="bg-orange-200">Row 2, Col 2</Label>
  <Label row="1" col="2" class="bg-purple-200">Row 2, Col 3</Label>

  <!-- Row 3 -->
  <Label row="2" col="0" class="bg-slate-200">Row 3, Col 1</Label>
  <Label row="2" col="1" class="bg-cyan-200">Row 3, Col 2</Label>
  <Label row="2" col="2" class="bg-rose-200">Row 3, Col 3</Label>
</GridLayout>
```

## Percentage Based Layouts

You can also use a neat trick: `"40* 60*"` to create a percentage-based grid layout for proportional spacing. 🤯