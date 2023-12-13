module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { targets: { node: "current" } }], // add this
  ],
  plugins: [
    "@babel/plugin-syntax-jsx",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
  ],
  env: {
    test: {
      plugins: [
        [
          "transform-react-remove-prop-types",
          {
            mode: "remove",
            ignoreFilenames: ["node_modules"],
          },
        ],
      ],
    },
  },
};
