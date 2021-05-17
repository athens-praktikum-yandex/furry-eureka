declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  const content: unknown;
  export default content;
}
declare module '*.gif';

declare module 'redux-persist-cookie-storage';
