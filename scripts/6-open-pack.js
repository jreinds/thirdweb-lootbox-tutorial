import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xF5601789EfAF23A71fc1930fd0440e31b4f28386';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}