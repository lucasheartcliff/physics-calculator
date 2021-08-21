import { Parameters, AvailableParameters, Result } from '../types/index'
import _ from 'lodash'

export const matchParameters = (
  input: Parameters | Result,
  node: AvailableParameters
) => {
  for (const key of Object.keys(node)) {
    if (!_.has(input, key)) return false
  }
  return true
}
