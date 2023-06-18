/*
* Allows you to extract the value from a type
* For example:
* >> const MyArray= [1,2,3]
* >> type TypeMyArrayValue = ArrayValueType<typeof MyArray> // number
*/
export type ArrayType<T extends readonly unknown[]> = T extends readonly (infer ElementType)[] ? ElementType : never;

export type Dict = { [key: string]: any }