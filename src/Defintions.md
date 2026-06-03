Write down the definitions of the following terms and memorise them. For syntactic constructs, learn
how they are structured and how you can identify them in code:
Syntax:
1 Declaration
introduces a named variable or function in the program

2 Statement
a complete instruction that does something, like if, for, or assigning a variable

3 Expression
any code that produces a value

4 Parameter (sometimes called formal parameter)
the placeholder name in a function's definition. 

5 Argument (sometimes called actual parameter – but let's stick with Argument!)
the actual value passed when calling a function.

6 Function Declaration 
introduce a function in the programm using the keyword function

7 Function Expression
a function assigned to a variable. 

8 Arrow Function Definition
abbreviated function expression using =>

9 Function Type
the type of the function declared

10Function Reference
also named callback,    A function reference is when you refer to a function by name without calling it
11Function Call
A function call is when you actually execute a function by writing its name followed by parentheses. 

Concepts for asynchronous programming:
1 Call Stack
The call stack is JavaScript's mechanism for tracking which function is currently running and where to return when it finishes. It works like a stack of plates — each time a function is called, it's pushed on top; when it returns, it's popped off. JavaScript can only execute one thing at a time, so the call stack is always working on the top item.

2 Event Loop
the mechanism that watches the call stack and the callback queue. When the stack is empty, it picks the next waiting callback and pushes it onto the stack. This is how async code eventually gets to run.
