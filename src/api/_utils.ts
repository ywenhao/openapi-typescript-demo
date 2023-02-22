import type { paths } from '@/schema/all'

export type CommonAPI<
  T extends RejectPrefix<keyof paths>,
  M extends Method = Method,
  S extends number = 200
> = API<paths, AddPrefix<T>, M, S>

export type CommonParams<
  T extends RejectPrefix<keyof paths>,
  M extends Method = Method
> = ApiParameter<paths, AddPrefix<T>, M>

export type CommonReturn<
  T extends RejectPrefix<keyof paths>,
  M extends Method = Method,
  STATE extends number = 200
> = ApiReturn<paths, AddPrefix<T>, M, STATE>

export type CommonReturnListItem<
  T extends RejectPrefix<keyof paths>,
  M extends Method = Method,
  K extends string = 'list',
  STATE extends number = 200
> = CommonReturn<T, M, STATE> extends { [Key in K]?: Array<infer R> }
  ? R
  : never
