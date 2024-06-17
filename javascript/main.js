process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}
// All of code write main();

function main() {
  const x = readline();
  process.stdout.write("hello: "); // without auto '\n' (newline)
  console.log(x);
}
// with auto '\n' (newline)
// var line2 = readline();
// console.log(line2);
