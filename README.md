# afafx

This repository contains After Effects (AFX) scripts written by me, Alex Forsythe (AF). These are quick-and-dirty tools that are only as polished as I need them to be for my own use. They're provided without warranty.

## Development Setup

The basic development and testing workflow uses Visual Studio code. To test the project:

1. In vscode, ensure that the [ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug) extension is installed
2. Open the vscode workspace
3. Press Ctrl+Shift+P &rarr; Select the target application &rarr; After Effects 2020
4. Press F5, and the main script should run in After Effects.

## Compilation

JavaScript had a pretty rough start as a language. But it's far more pleasant to work with these days, particularly with the adoption of the ES6 standard. Thanks to tools like Babel and webpack, you can write modern, idiomatic JavaScript, and your code can be seamlessly and effortlessly compiled (or "transpiled") into a more widely supported dialect of JavaScript, full of shims that guarantee support across a wide range of browser versions.

Make no mistake: web development is still gross. The peculiar legacy of the technologies at the heart of the web, the fragmented nature of web browsers, and their spotty adherence to standards form a bottomless pit full of eldritch horrors and untold despair. But while the whole of front-end web development still hovers over that pit, the industry has at least built some very solid tools that grant most developers the mercy of never having to stare deeply into its dark, dispiriting maw.

ExtendScript is another can of worms: it's a JavaScript variant based on the ES3 standard (y'know, the one published in 1999). Given that Adobe's acquisitions-focused business model does not prioritize making life easy for developers (or fixing what ain't broke), there's now a wide divergence between modern *(read: "good")* JavaScript and the kind of coding style and development practices that could be assumed of an After Effects scripter back in 2003.

Thankfully, other people have made commendable efforts to address this problem. There's a command-line tool called `extendscriptr` (which sits in front of a package called `extendscript-es5-shim`) which we can use to transpile modern-ish JavaScript to ExtendScript. This lets us use ES5 features in our source code, with a very straightforward compilation process (i.e. just running extendscriptr) to spit out an ES3-compatible script. _(There's also an `extendscript-es6-shim` but extendscriptr doesn't seem to support it, and right now I'd rather just avoid ES6 features than open that can of worms.)_

What all of this means is that we can use sane, modern development practices &mdash; installing dependencies via npm, organizing our code across different files, building different targets for debugging vs. production &mdash; and we'll end up with a single script file that After Effects can run. Using the vscode workspace, the iteration loop is:

1. Make source changes
2. Press F5 to invoke extendscriptr and run the resulting script in After Effects

...hooray!
