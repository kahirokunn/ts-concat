type List = any[] | readonly any[]
type Concat<Left extends List, Right extends List> = [...Left, ...Right]

export function concat<T extends List, U extends List>(a: T, b: U): Concat<T, U>
export function concat(a: any, b: any): any {
  return [...a, ...b]
}
