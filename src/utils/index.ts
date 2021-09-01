import { Parameters, AvailableParameters, Result } from '../types/index'
import _ from 'lodash'
import { PI } from './constants'

export const matchParameters = (
  input: Parameters | Result,
  node: AvailableParameters
) => {
  for (const key of Object.keys(node)) {
    if (!_.has(input, key)) return false
  }
  return true
}

export const toRadians = (angle: number) => (angle * PI) / 180

export const parseFunction = (f:string) => {
  const initialBracketIndex = f.indexOf('{')
  f = f.substring(0,initialBracketIndex)
}