# rehype-remove-images

**[rehype][https://github.com/rehypejs/rehype]** plugin to remove images.

## Contents

## What is this?

This package is a plugin that removes images.

## When should I use this?

You can use this plugin when you want to improve the transfer size of HTML, or cleanup HTML before converting to markdown.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install rehype-remove-images
```

In Deno with [`esm.sh`][esmsh]:

```js
import rehypeRemoveImages from 'https://esm.sh/rehype-remove-images'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import rehypeRemoveImages from 'https://esm.sh/rehype-remove-images?bundle'
</script>
```

## Use

On the API:

```js
import {read} from 'to-vfile'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import rehypeRemoveImages from 'rehype-remove-images'

main()

async function main() {
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemoveImages)
    .use(rehypeStringify)
    .process(await read('index.html'))

  console.log(String(file))
}
```

On the CLI:

```sh
rehype input.html --use rehype-remove-images --output output.html
```

On the CLI in a config file (here a `package.json`):

```diff
 …
 "rehype": {
   "plugins": [
     …
+    "rehype-remove-images",
     …
   ]
 }
 …
```

## API

This package exports no identifiers.
The default export is `rehypeRemoveImages`.

### `unified().use(rehypeRemoveImages)`

Remove images.

## Types

This package is fully typed with TypeScript.

## Security

As **rehype** works on HTML, and improper use of HTML can open you up to a
cross-site scripting (XSS) attack, use of rehype can also be unsafe.
Use `rehype-sanitize` to make the tree safe.
