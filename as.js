async function main() {
  console.log("A");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("B");
      resolve();
    });
  });
  console.log("C");
  // resolve();
}

main();
