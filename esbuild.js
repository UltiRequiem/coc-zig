const esbuild = require("esbuild");

const options = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: process.env.NODE_ENV === "production",
  sourcemap: process.env.NODE_ENV === "development",
  mainFields: ["module", "main"],
  external: ["coc.nvim"],
  platform: "node",
  target: "node12",
  outfile: "lib/index.js",
};

async function start(watch) {
  if (watch) {
    console.log("watching...");
    const context = await esbuild.context(options);
    await context.watch();
    return;
  }

  await esbuild.build(options);
}

start(process.argv[2] === "--watch").catch((error) => {
  console.error(error);
  process.exit(1);
});
