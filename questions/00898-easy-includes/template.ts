type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false

type Includes<T extends any[], U> = T extends [infer R, ...infer L]
  ? Equal<R, U> extends true
    ? true
    : Includes<L, U>
  : false
