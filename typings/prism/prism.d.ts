interface IPrism {
  highlightAll(async:boolean, callback?:() => void);
}

declare module "Prism" {
  export = Prism;
}
declare var Prism: IPrism;