# eslint-plugin-ssrules

A collection of security rules for JavaScript

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ssrules`:

```
$ npm install eslint-plugin-ssrules --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ss` globally.

## Usage

Add `ssrules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ssrule"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ssrules/bad-hash-algorithm": 2
    }
}
```

## Supported Rules

- ssrules/bad-hash-algorithm - Checks for use of md5 and sha1





