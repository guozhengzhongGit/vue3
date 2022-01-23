// 生产环境产物
const fs = require("fs");
// const execa = require("execa");
const execa = require("execa");
const targets = fs
  .readdirSync("packages")
  .filter((file) => fs.statSync(`packages/${file}`).isDirectory());
// 打包多个子包

function runAll(targets, iteratorFn) {
  const res = [];
  for (const item of targets) {
    const p = iteratorFn(item);
    res.push(p);
  }
  return Promise.all(res);
}

async function build(target) {
  await execa("rollup", ["-c", "--environment", `TARGET:${target}`], {
    stdio: "inherit",
  });
}

runAll(targets, build);
