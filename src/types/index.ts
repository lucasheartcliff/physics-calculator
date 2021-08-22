export interface Jar {
  id: number
  name: string
  currentSize: number
  maxSize: number
}
export interface JarMap {
  [key: number]: Jar
}

export interface SimplifiedJar {
  name: string
  currentSize: number
}

export interface Step {
  type: 'drain' | 'transfer' | 'fill'
  origin?: SimplifiedJar
  destiny: SimplifiedJar
}

export type History = any

export interface Unit {
  id: number
  name: string
  parameterName: string
}

export type AvailableParameters = {
  [key in Attribute]?: boolean
}

export type Parameters = {
  [key in Attribute]: number
}

export type Result = {
  [key in keyof Parameters]?: number
}

export interface Node {
  parameters: AvailableParameters
  calculate: (p: Parameters) => Result
  result: AvailableParameters
}

export type Attribute =
  | 'force'
  | 'acceleration'
  | 'speed'
  | 'mass'
  | 'charge'
  | 'energyField'
  | 'magneticField'
  | 'chargeDensity'
  | 'distance'
  | 'time'
  | 'eletricPotencial'
  | 'radius'
  | 'period'
  | 'frequency'
  | 'angularFrequency'
  | 'angle'
  | 'work'
