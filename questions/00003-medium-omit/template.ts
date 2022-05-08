// type MyOmit<T, K extends keyof T> = {
//   [Key in keyof T]: Key extends K ? never : T[Key]
// }

type MyOmit<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}
