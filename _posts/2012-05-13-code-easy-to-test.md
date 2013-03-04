---
layout: post
title: "Book Notes - Code Easy to Test"
tags: [book, notes, testing]
---
{% include JB/setup %}

## Unit Testing

Testing done on each module, in isolation, to verify its behavior. Typically will establish an artificial environment, then invoke routines on the module being tested.

## Test Against Contract

Test that the module delivers the functionality it promises, over a wide range of test cases and boundary conditions.

Module may be dependent on other modules, so how do we test? One approach is to test subcomponents contarct in full of a module first thoroughly. Once that has been verified, then the module itself can be tested. 

Hepful in debugging: If Module A tests failed but its dependent modules 1a and 2a tests have passed, can be pretty sure issue is in Module A, and not waste time reexamining its dependent modules. Purpose is to avoid disasters that may come up down the line.

__Tip:__
> When you design a module or single routine, design both its contract and the the code to test that contract. This may take care of boundary conditions and other issues.

## Test Harness

Handle common operations such as:

1. logging status
2. analyzing output for expected results
3. selecting and running the tests
4. standardized form of failture reporting
5. specify setup and cleanup

In OO languages and envrionments, might create a base class that provides these common operations.

__Tip:__
> Logs are helpful once application is in production environment to see what's going on internally. 

> Use of 'hot-key' sequence to launch a diagnostic control window with status message and information. 'Easter Egg' for debugging.

