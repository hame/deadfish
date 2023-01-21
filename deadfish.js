// My first deadfish interpreter
// i = increment
// d = decrement
// s = square
// o = output

// Only one memory location (aka register or accumulator)
let register = 0; // Initise to 0

// The program
// Set of instructions that modifies the register
let program = "dsso";

// The interpreter
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
