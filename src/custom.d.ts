import '@testing-library/jest-dom/extend-expect';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.ico' {
  const value: any;
  export default value;
}
