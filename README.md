# use-size-performant

> React hook to retrieve the size of an element

[![NPM](https://img.shields.io/npm/v/use-size-performant.svg)](https://www.npmjs.com/package/use-size-performant) 

## Installation

```
npm i use-size-performant
// or
yarn add use-size-performant
```

## Usage

### Using Ref

```js
import useSize from "use-size-performant";
const YourComponent = () => {
  const ref = useRef(null);
  const { height, width } = useSize(ref);
  return (
    <div ref={ref}>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
};
```

### Using DOM elements

```js
import useSize from "use-size-performant";
const YourComponent = () => {
  const dom = document.querySelector('body');
  const { height, width } = useSize(ref);
  return (
    <div ref={ref}>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
};
```

