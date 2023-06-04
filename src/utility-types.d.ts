type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type PartialByKeys<Obj, Keys extends keyof Obj = keyof Obj> = Prettify<
  Partial<Pick<Obj, Keys>> & Omit<Obj, Keys>
>

type RequiredByKeys<Obj, Keys extends keyof Obj = keyof Obj> = Prettify<
  Required<Pick<Obj, Keys>> & Omit<Obj, Keys>
>
