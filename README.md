# jQuery.flashClass

Some syntactic sugar for adding and removing a class within a set amount of time.

``` javascript
$('p').flashClass();

// equivalent to the following 2 lines
$('p').addClass('flash');
setTimeout(function () { $('p').removeClass('flash'); }, 500);

// you can pass in options to override className and/or delay
$('p').flashClass({ className: 'highlight', delay: 1000 });
````
