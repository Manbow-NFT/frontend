module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  parser: 'typescript',
  singleQuote: true,
  jsxSingleQuote: false,
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      options: {
        semi: false,
      },
    },
  ],
}
