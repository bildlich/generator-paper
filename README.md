# generator-paper

A [Yeoman](http://yeoman.io) generator to quickly set up a [paper.js](http://paperjs.org/) project. You'll write CoffeeScript, which is fun.

## What you'll get

A folder where everything is set up so that you can start writing code for paper.js immediately. An html file, paper.js and CoffeeScript ready to go.

## Getting Started

Install Yeoman:

```bash
npm install -g yo
```

To install generator-paper from npm, run:

```bash
npm install -g generator-paper
```

To set up a paper.js project in a folder, run:
```bash
cd my-new-project
yo paper
```
`my-new-project` ist just an example, it can be any folder you want.

To transpile the CoffeeScript to JavaScript, run:
```bash
gulp
```
Gulp will now watch all .coffee files in `my-new-project/src` and transpile them to `my-new-project/public`.

### How to use it

#### Write code in the `src/` folder

Check out `my-new-project/src`. It contains

*  `index.html` with a canvas element. Make markup changes here.
* `script.coffee`: Put your drawing wizz here. Note that you can't use PaperScript. Instead, write plain CoffeeScript. It's not so different though. See [Using JavaScript directly](http://paperjs.org/tutorials/getting-started/using-javascript-directly/) in the Paper.js docs.

#### Find your changes in the `public/` folder

Make sure you run `gulp` in the terminal as described above. Only when gulp is running the files from `src/` are properly processed and placed in `public/`.

*  `index.html` is the same as in the `/src` folder but we magically inserted `<script>` tags for all our dependencies. For example, the much-needed paper.js library. Open `index.html` in the browser to see your drawings.
* `script.js` contains the transpiled JS from `script.coffee`.

#### Customize your project

Bower is set up and ready. Use it to manage frontend dependencies. For instance, to install jQuery, run

```bash
bower install jquery -save
```

To automatically inject our new dependency into `index.html`, re-run

```bash
gulp
```

This will add the appropriate `<script>` tag of your new dependency to `index.html`.

## License

MIT
