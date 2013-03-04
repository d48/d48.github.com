---
layout: post
title: "Book: Pragmatic Programmer"
tags: [book, programming, refactoring]
---
{% include JB/setup %}

## Book notes

Exercises in refactoring code using:

{% highlight js %}
  public class Square extends Shape {
      public Square(double size) {
          super(size);
      }
  }
 
 
public class Window {
  private Shape shape;
  public Window(Shape shape) {
    this.shape = shape;
  }
}
{% endhighlight %}

1. Subclassing vs. Delegation. Difference that an object is a 'kind-of' of something vs. the object 'has-a' characteristic, respectively.

2. Circle is a kind-of shape = Use subclasses
   
3. A Window has-a shape = Delegation
