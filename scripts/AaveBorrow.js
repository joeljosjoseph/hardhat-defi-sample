async function main() {}

main()
  .then(() => process.exit(1))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
