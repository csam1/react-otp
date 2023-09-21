import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";

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
      terser(),
      external(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["node_modules", "dist"],
      }),
    ],
  }
];
