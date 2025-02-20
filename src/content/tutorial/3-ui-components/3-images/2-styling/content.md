---

type: lesson  
title: Image Styling 
focus: /tutorial.component.html  
slug: ui-image-styles
---

<!-- Talk about the different aspects -->
# Image Styling

### Aspect fits

The `aspectFit` property of the `Image` component allows you to specify how the image should be resized to fit the available space. The `aspectFit` property can be set to one of the following values:

- `fill`: The image is resized to fill the available space, maintaining its aspect ratio.
- `aspectFit`: The image is resized to fit the available space while maintaining its aspect ratio. The entire image is displayed, but some parts may be cropped.
- `aspectFill`: The image is resized to fill the available space while maintaining its aspect ratio. The entire image is displayed, but some parts may be cropped.
- `none`: The image is resized to fit the available space, but the aspect ratio is not maintained. The image may be distorted.

```xml
<Image src="~/images/sample.png" aspectFit="aspectFit"></Image>
```

See how the image is resized when you change the `aspectFit` property.

