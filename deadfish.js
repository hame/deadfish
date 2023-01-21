// My first deadfish interpreter
// i = increment
// d = decrement
// s = square
// o = output

// The only memory location (aka register or accumulator)
let register = 0; // Initialise to 0

// The program
let source = "dsso";

// Run program
interpreter(source);

// The interpreter
function interpreter(program) {
  for (let instruction of program) {
    if (instruction == "i") {
      register = register + 1;
    } else if (instruction == "d") {
      register = register - 1;
    } else if (instruction == "s") {
      register = register * register;
    } else if (instruction == "o") {
      console.log(register);
    }

    // Overflow deadfish style
    /* Make sure x is not greater then [sic] 256 */
    if (register == 256) register = 0;
    if (register == -1) register = 0;
  }
}
