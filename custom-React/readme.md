# Custom React Render Function

This project demonstrates a basic custom implementation of a React-like rendering function, `customRender`, which takes a simple React element object and renders it to the DOM.

## Overview

The custom render function simulates React's rendering behavior by converting a JavaScript object representing a React element into an actual DOM element. It demonstrates the handling of HTML elements, attributes, and children in a modular way.

## Implementation Details

### `customRender` Function

The `customRender` function is responsible for creating a DOM element based on the provided React element object. It handles the following:

- **Element Type**: Creates a DOM element using `document.createElement` based on the `type` property of the React element.
- **Attributes**: Iterates over the `props` object of the React element to set attributes on the created DOM element.
- **Children**: Sets the `innerHTML` of the DOM element based on the `children` property.

### Example

The following example demonstrates how to use the `customRender` function to render a link (`<a>`) element to the DOM:

```javascript
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to open Google"
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);


### Key Points:
1. **Example Code**: The example code provided shows how the function is used, along with the necessary input format.
2. **Implementation Details**: Highlights the core functionality and what the function accomplishes.
3. **Limitations**: Clearly states the current limitations of the implementation to manage expectations.

This `README.md` is designed to be concise and informative, explaining the purpose and usage of the custom React render function.
