export const vendingMachine = (input: number) =>
  console.log(
    !(input % 2)
      ? "candy"
      : !(input % 11)
      ? "bar"
      : !(input % 22)
      ? "candybar"
      : input
  );
