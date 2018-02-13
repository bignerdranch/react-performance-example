import React from 'react';

const Heading = ({children}) =>
  <h1 className="myheading">{headingCase(children)}</h1>;

const Subheading = ({children}) =>
  <h2 className="mysubheading">{subheadingCase(children)}</h2>;

function headingCase(text) {
  console.log('converting to heading case');
  return text.toUpperCase();
}

function subheadingCase(text) {
  console.log('converting to subheading case');
  return text.toLowerCase();
}

export {
  Heading,
  Subheading,
};
