# Deadfish
A programming language originally created by Jonathan Todd Skinner

## Reference
Using the info on https://esolangs.org/wiki/Deadfish 
The C example is the original source code https://esolangs.org/wiki/Deadfish#C 

## Commands
The language only has four commands:
"i" increment
"d" decrement
"s" square
"o" output

## Environment
There is only one memory location, initialised to the number 0
There is no user input

## Example
 iiidsso
01232488
Start at 0, increment three times, decrement once, square, square and output 8 

## Flow
There is no control flow, so no need to store where we are in the program

## Overflow
Guessing the intention of the author was to prevent overflow by checking
if mem == 256 or mem === -1 then mem = 0
But this means any value greater than 256 will remain, e.g. 400 will still be 400

### Bytes
I'm no expert but the original C code declared memory as the type int
If the intention was to limit the memory to only 256 values this could be unsigned char
(depending on the implementation of C used)

## Conclusion
Personnally I love this language, so easy to understand!
A perfect place to begin a programming language journey

## Further references
Would this language be an example of a zero address format, aka stack machine?
https://en.wikipedia.org/wiki/Stack_machine
As there is only one memory location, therefore no need to include address information in commands

Or would this language be an example of a 0-operand language?
As the instructions are only one command, no need for any arguments to the commands, no need for a parser
(maybe next time try creating a lannguage with 0-openand but more than 1 character)