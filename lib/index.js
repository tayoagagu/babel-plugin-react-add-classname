"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_syntax_jsx_1 = __importDefault(require("@babel/plugin-syntax-jsx"));
exports.default = (function () {
    return {
        inherits: plugin_syntax_jsx_1.default,
        name: 'react-add-classname',
        visitor: {
            Program: function (path, state) {
                var name = state.opts.name;
                if (!name) {
                    return;
                }
                path.traverse({
                    JSXAttribute: function (jsxPath) {
                        // @ts-ignore
                        if (jsxPath.get('name.name').node === 'className') {
                            // @ts-ignore
                            var valueNode = jsxPath.get('value.value').node;
                            if (typeof valueNode !== 'string') {
                                return;
                            }
                            if (valueNode.split(' ').indexOf(name) > -1) {
                                // already exists
                                return;
                            }
                            // @ts-ignore
                            jsxPath.node.value.value = valueNode + " " + name;
                        }
                    },
                });
            },
        },
    };
});
//# sourceMappingURL=index.js.map