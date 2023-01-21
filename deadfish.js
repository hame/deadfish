// My first deadfish interpreter
// i = increment
// d = decrement
// s = square
// o = output

// Only one memory location (aka register or accumulator)
// Initise to 0
let accumulator = 0;

// The program
// Set of instructions that modifies the accumulator
let program = "iisso";

// The interpreter
for (let instruction of program) {
  if (instruction == "i") {
    accumulator = accumulator + 1;
  } else if (instruction == "d") {
    accumulator = accumulator - 1;
  } else if (instruction == "s") {
    accumulator = accumulator * accumulator;
  } else if (instruction == "o") {
    console.log(accumulator);
  }
}
