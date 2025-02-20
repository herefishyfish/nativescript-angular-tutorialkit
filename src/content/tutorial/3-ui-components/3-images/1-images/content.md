---
type: lesson
title: Image
focus: /tutorial.component.ts
slug: ui-image
---

# Image

In this lesson, you'll learn how to display and style images in your NativeScript application using the `<Image>` component. Images can be loaded from local assets or from remote URLs.

## Basic Image Display

To display a local image, use the following syntax:

```xml
<Image src="~/images/sample.png"></Image>
```

This example loads an image from the local assets folder and adjusts its aspect ratio.

## Custom Styling

Customize your images using CSS. For example, you might want to add a border, rounded corners, or a drop shadow:

Apply the custom style to your image:

```css
.custom-image {
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
```

Then, apply the CSS class to your image:

```xml
<Image src="~/images/sample.png" class="custom-image"></Image>
```

