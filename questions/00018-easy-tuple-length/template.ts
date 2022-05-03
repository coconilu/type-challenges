// type Length<T extends ReadonlyArray<keyof any>> = T extends { length: number }
//   ? T['length']
//   : never

type Length<T extends ReadonlyArray<any>> = T['length']
