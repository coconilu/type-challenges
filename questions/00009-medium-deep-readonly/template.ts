// type DeepReadonly<T> = {
//   [K in keyof T]-?: T[K] extends object ? DeepReadonly<T[K]> : T[K]
// }

type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends undefined
    ? T[K]
    : DeepReadonly<T[K]>
}
