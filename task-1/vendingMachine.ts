export const vendingMachine = (input: number) => {
  if (!(input % 2)) {
    console.log("candy");
  } else if (!(input % 11)) {
    console.log("bar");
  } else if (!(input % 22)) {
    console.log("candybar");
  } else {
    console.log(input);
  }
};

vendingMachine(22);
