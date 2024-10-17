---

type: lesson  
title: Nesting Layouts  
focus: /tutorial.component.html  
editor: 
  fileTree: false
slug: stack-layout-nesting
---

# Nesting Layouts

You can nest multiple layouts within each other to create complex layouts. 


```xml
<StackLayout>
  <Label>First label</Label>
  <StackLayout orientation="horizontal">
    <Label>Second label</Label>
    <Label>Third label</Label>
  </StackLayout>
</StackLayout>
```

In this example, `Label 1` is stacked on top of `Label 2` and `Label 3`.
