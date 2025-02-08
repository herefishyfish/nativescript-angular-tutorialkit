---

type: lesson  
title: Button Styling
focus: /tutorial.component.css  
slug: ui-button-styling
---

# Button Styling

NativeScript buttons can be styled using themes or custom CSS. You can use CSS properties to customize the appearance of buttons, such as background color, border radius, padding, and more just like you would with HTML buttons.

## Android Elevations

On Android devices, buttons can display shadows to create a sense of depth through the elevation property. Adjusting the `android-elevation` enables you to control the shadow effect, as demonstrated below:

```css
.button {
  android-elevation: 4;
}
```

| Elevation | Shadow Effect |
| --------- | ------------- |
| -2        | No shadow     |
| -1        | Shadow on touch |
| 0         | Default shadow |
| 1         | Raised button |
| 2         | Floating button |

A common issue arises with transparent buttons, where an unwanted shadow may appear. This can be resolved by setting `android-elevation` to -1, which removes the shadow effect

```css
button {
  background-color: transparent;
  android-elevation: -1;
}
```

By tweaking these properties, you can ensure your buttons maintain a consistent look and feel across different platforms.