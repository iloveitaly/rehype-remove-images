import test from 'tape'
import {rehype} from 'rehype'
import {u} from 'unist-builder'
import {h} from 'hastscript'
import min from './index.js'

test('rehype-remove-images', (t) => {
  t.deepEqual(
    rehype()
      .use(min)
      .runSync(u('root', [h('img', {src: 'path.png'})])),
    u('root', {children: []})
  )

  t.end()
})
