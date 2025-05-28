# odin-recursion

This repo is all about practicing using recursive functions. In which there are:

## One non-recursive and Two recursive functions for comparsion in Fibonacci, where:
 - The 1st recursive function uses a default index to generate fibonacci values to add in the array, until it equals the input number. It is a forward method to generate fibonacci values as it enters recursively.
 - The 2nd recursive function instead bases on the input number to pre-populate the list with all recursive nextval until nextVal reaches list[1] + list[0]. Then every element in the list is calculated backward-ly.
 - The test examples are included.

## A recursive function for MergeSort, where:
 - In each inside function, it runs 2 recursive functions for dividing arrays further and further, and a while loop to sort and merge them.
 - The result always returns a sorted array of any element. The base case returns an array of 1 element.
 - The test examples are included.