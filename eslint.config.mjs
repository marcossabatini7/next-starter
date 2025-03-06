import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.config({
        extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
        plugins: ['check-file', 'prettier'],
        rules: {
            'prefer-arrow-callback': 'error',
            'prefer-template': 'error',
            semi: ['error', 'never'],
            quotes: ['error', 'single'],
            'jsx-quotes': ['error', 'prefer-double'],
            'check-file/filename-naming-convention': [
                'error',
                {
                    '**/*.{ts,tsx}': 'KEBAB_CASE',
                },
                {
                    ignoreMiddleExtensions: true,
                },
            ],
            'check-file/folder-naming-convention': [
                'error',
                {
                    'src/**/!^[.*': 'KEBAB_CASE',
                },
            ],
            'prettier/prettier': 'error',
        },
    }),
]

export default eslintConfig
