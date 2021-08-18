import { PluginObj } from '@babel/core'
import jsxSyntax from '@babel/plugin-syntax-jsx'
// import blog from 'babel-log'

interface State {
  opts: {
    name?: string
  }
}

export default (): PluginObj<State> => {
  return {
    inherits: jsxSyntax,
    name: 'react-add-classname',
    visitor: {
      Program(path, state) {
        const name = state.opts.name

        if (!name) {
          return
        }

        path.traverse({
          JSXAttribute(jsxPath) {
            // @ts-ignore
            if (jsxPath.get('name.name').node === 'className') {
              // @ts-ignore
              const valueNode = jsxPath.get('value.value').node

              if (typeof valueNode !== 'string') {
                return
              }

              if (valueNode.split(' ').indexOf(name) > -1) {
                // already exists
                return
              }

              // @ts-ignore
              jsxPath.node.value.value = `${valueNode} ${name}`
            }
          },
        })
      },
    },
  }
}
