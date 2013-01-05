---
layout: post
title: "Pragmatic Programmer book"
tags: [book, pragmatic programmer, metadata]
---
{% include JB/setup %}

# Book notes on Meta-Data driven applications

**Metadata** is used to define preferences or configuration details for an application at runtime, not compile time, so as to provide implementation details to achieve greater flexibility in the code, as well as adapt to ever-changing requirements and needs of business use.

## Goals

1. to think declaratively (specifying _what_ is to be done, not _how_)
2. create highly adaptable and dynamic programs (not get stuck in one way/solution)

## Why we would use

* Business policy and rules change
* Dodo bird analogy: species that don't adapt to the ever-changing environment, die.

## How to achieve

Adopt this general rule:

> Program for the general case, then provide the specifics somewhere else, outside the compiled code
	
## Benefits:

* It forces you to decouple your design
* Forces you to create a more abstract, robust design by deferring details - providing later outside of the program 
* Customize the application without recompiling it (ex. CSS can be a type of implementation detail, but more specifically and traditionally a config file in xml or json)
* May be able to implement different projects using same application engine but with different metadata (ex., widgets enabled/disabled, language files, dev vs production)
