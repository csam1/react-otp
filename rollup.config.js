import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
const packageJson = require("./package.json");

export default [
  {
    input: "index.tsx",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        skipPreflightCheck: true,
      }),
      external(),
      nodeResolve({ extensions: [".ts", ".tsx"] }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["node_modules", "dist"],
      }),
    ],
  }
];
