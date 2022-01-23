// 单独开发某个包
// 生产环境产物
const fs = require("fs");
// const execa = require("execa");
const execa = require("execa");
const target = "reactivity";

async function build(target) {
  await execa("rollup", ["-wc", "--environment", `TARGET:${target}`], {
    stdio: "inherit",
  });
}

build(target);
