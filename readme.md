<br />
<p align="center">
  <!-- TODO: Add Image
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Dummify</h3>

  <p align="center">
    Generate dynamic prototyping content
    <!-- TODO: Update all this stuff -->
    <br />
    <a href="https://github.com/joeyvanlierop/dummify"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/joeyvanlierop/dummify">View Demo</a>
    ·
    <a href="https://github.com/joeyvanlierop/dummify/issues">Report Bug</a>
    ·
    <a href="https://github.com/joeyvanlierop/dummify/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About The Project](#about-the-project)
- [Usage](#usage)
  - [Images](#images)
  - [Text](#text)

<!-- ABOUT THE PROJECT -->

## About The Project

Going through the front-end creation process requires the frequent need to test with dynamic images and text of various sizes to battle test the html + css styling. This can be a time consuming manual step, but also a crucial one to simulating user generated content, testing word wrapping, repeating of elements, etc. In order to test the front-end for these edge cases not only quicker, but more thoroughly, Dummify was realized to add a layer of automation to this process.

<!-- USAGE EXAMPLES -->

## Usage

Install the package:

```bash
yarn add dummyjs --dev # for use with yarn, or:
npm install dummyjs --save-dev # for use with npm
```

And, import:

```js
const Dummy = require("dummify"); // es5 or node
import Dummy from "dummify"; // es6
```

### Images

Generate the source of a 200x200 image

```js
const dummy = Dummy.src(200, 200);
```

Specify additional parameters to generate the source of an image between 200x200 and 300x300

```js
const dummy = Dummy.src(200, 200, 300, 300);
```

Use the src in an image

```html
<image src="{dummy}"></image> ``
```

### Text

> TODO
