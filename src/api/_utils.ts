export type CommonAPI<
  paths,
  T extends keyof paths,
  M extends Method = Method,
  S extends number = 200
> = API<paths, T, M, S>

export type CommonParams<
  paths,
  T extends keyof paths,
  M extends Method = Method
> = ApiParameter<paths, T, M>

export type CommonReturn<
  paths,
  T extends keyof paths,
  M extends Method = Method,
  STATE extends number = 200
> = ApiReturn<paths, T, M, STATE>

export type CommonReturnListItem<
  paths,
  T extends keyof paths,
  M extends Method = Method,
  K extends string = 'list',
  STATE extends number = 200
> = CommonReturn<paths, T, M, STATE> extends { [Key in K]?: Array<infer R> }
  ? R
  : never
