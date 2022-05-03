// type TupleToObject<T extends readonly (string | number | symbol)[]> = {
//   [K in T[number]]: K
// }

type TupleToObject<T extends ReadonlyArray<string | number | symbol>> = {
  [K in T[number]]: K
}
