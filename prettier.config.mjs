// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    semi: false,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'es5',
    importOrder: [
        '^(react|next?/?([a-zA-Z/]*))$',
        '<THIRD_PARTY_MODULES>',
        '^@(.*)$',
        '^@/(.*)$',
        '^[./].*(?<!\\.(c|le|sc)ss)$', // Relative that doesn't end in style file
        '^[^./].*\\.(c|le|sc)ss$', // Non-relative style
        '^[./].*\\.(c|le|sc)ss$', // Relative style
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: [
        '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
    ],
}

export default config
