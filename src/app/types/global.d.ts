declare module '*module.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module '*module.sass' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
