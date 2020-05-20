module.exports = {
  presets: ["@vue/cli-plugin-babel/preset", ["@babel/env", { "modules": "commonjs" }]],
  plugins: ["add-module-exports"]
};
