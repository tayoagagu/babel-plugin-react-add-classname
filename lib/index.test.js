"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var babel_plugin_tester_1 = __importDefault(require("babel-plugin-tester"));
var string_snapshot_serializer_1 = require("string-snapshot-serializer");
var _1 = __importDefault(require("."));
expect.addSnapshotSerializer(string_snapshot_serializer_1.getSnapshotSerializer());
babel_plugin_tester_1.default({
    title: 'no options',
    plugin: _1.default,
    snapshot: true,
    tests: [
        {
            title: 'do nothing',
            code: "\n  const hello = () => (\n    <div className=\"test-hello\"></div>\n  )\n",
        }
    ],
});
babel_plugin_tester_1.default({
    title: 'with option',
    plugin: _1.default,
    snapshot: true,
    pluginOptions: { name: 'classname-to-add' },
    tests: [
        {
            title: 'with class name',
            code: "\n  const hello = () => (\n    <div className=\"babel-a hello test-b\"></div>\n  )\n",
        },
        {
            title: 'with class name that already exists',
            code: "\n  const hello = () => (\n    <div className=\"babel-a hello test-b classname-to-add\"></div>\n  )\n",
        },
    ],
});
//# sourceMappingURL=index.test.js.map