/// <reference types="next" />
/// <reference types="next/types/global" />

// <reference types="react-scripts" />
// declare module '*.svg' {
//   export default JSX.IntrinsicElements.svg
// }

declare module "*.svg" {
    import React from "react";
    export default JSX.IntrinsicElements.svg;
  }

