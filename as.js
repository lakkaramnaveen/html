async function main() {
  console.log("A");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("B");
    });
  });
  console.log("C");
  // resolve();
}

main();
