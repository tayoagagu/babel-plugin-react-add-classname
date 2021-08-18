# babel-plugin-react-add-classname

> babel plugin for to add class name to component

## Install

npm:

```
$ npm install --save-dev babel-plugin-react-add-classname
```

yarn:

```
$ yarn add --dev babel-plugin-react-add-classname
```

## Usage

.babelrc

```js
{
  "plugins": ["react-add-classname", { "name": "classname-to-add" }]
}
```

### Options

### name

## Examples

```js
const hello = () => <div className="test-a hello test-b"></div>

      ↓ ↓ ↓ ↓ ↓ ↓

const hello = () => <div className="test-a hello test-b classname-to-add"></div>

## License

MIT ©
```
