---
layout: post
title: "PHP and pass by reference"
tags: [php, pass by reference, reference, pointer]
---
{% include JB/setup %}

# Pass by reference

You can pass a variable by reference to a function so the function can modify the variable. It's basically a pointer to the variable so if it's modified within a function, it's 'globally' modified or within the scope of execution outside where it's referenced. Syntax below:

{% highlight js %}

<?php 
	function foo(&$arg)
	{	
		$arg++;		
	}

	$var = 5;
	foo($var);	// $var is 6
?>

{% endhighlight %}
