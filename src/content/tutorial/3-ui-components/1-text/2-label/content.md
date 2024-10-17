---
type: lesson  
title: Labels 
focus: /tutorial.component.html
editor:
  fileTree: false
slug: labels
---

# Labels

In this tutorial, we've already encountered multiple `Label` elements. Labels are essential for displaying text on the screen.

### Creating a Label

To create a label in NativeScript, use the `<Label>` element:

```xml
<Label>Hello, World!</Label>
```
In this example, the label is created with the text "Hello, World!" which will be displayed on the screen.

### Text Wrapping
By default, label text does not wrap if it exceeds the width of the element. You can change this behavior by setting the textWrap property to true. This ensures the text will wrap onto the next line instead of being truncated:

```xml
<Label textWrap="true">This is a very long piece of text that will wrap properly when displayed.</Label>
```
This will allow the text to span multiple lines if necessary.

### Formatted String

NativeScript also allows us to create rich formatted text using the FormattedString component. This is useful if you want to style parts of your text differently. Here’s an example of how to use it:

```xml
<Label textWrap="true">
  <FormattedString>
    <Span>Hello, </Span>
    <Span class="text-2xl font-bold text-blue-400">NativeScript!</Span>
    <Span> high-performance, cross-platform applications with direct access to native APIs that build truly native experiences.</Span>
  </FormattedString>
</Label>
```

You can add this to the base to see how formatted text works in NativeScript.

## Native Elements
The `Label` component in NativeScript core uses these native platform-specific elements:

- **iOS**: `UILabel`
- **Android**: `android.widget.TextView`