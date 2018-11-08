# eslint-plugin-ss

A collection of security rules for JavaScript

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ss`:

```
$ npm install eslint-plugin-ss --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ss` globally.

## Usage

Add `ss` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ss"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ss/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





