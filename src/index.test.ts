import pluginTester from 'babel-plugin-tester'
import { getSnapshotSerializer } from 'string-snapshot-serializer'
import plugin from '.'

expect.addSnapshotSerializer(getSnapshotSerializer())

pluginTester({
  title: 'no options',
  plugin,
  snapshot: true,
  tests: [
    {
      title: 'do nothing',
      code: `
  const hello = () => (
    <div className="test-hello"></div>
  )
`,
    },
  ],
})

pluginTester({
  title: 'with option',
  plugin,
  snapshot: true,
  pluginOptions: { name: 'classname-to-add' },
  tests: [
    {
      title: 'with class name',
      code: `
  const hello = () => (
    <div className="babel-a hello test-b"></div>
  )
`,
    },
    {
      title: 'with class name that already exists',
      code: `
  const hello = () => (
    <div className="babel-a hello test-b classname-to-add"></div>
  )
`,
    },
  ],
})
