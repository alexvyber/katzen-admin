type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type PartialByKeys<Obj, Keys extends keyof Obj = keyof Obj> = Prettify<
  {
    [Prop in Exclude<keyof Obj, Keys>]: Obj[Prop]
  } & {
    [Prop in Keys]?: Obj[Prop]
  }
>
