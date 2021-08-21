import { has, cloneDeep } from 'lodash'
import {
  Jar,
  Parameters,
  Step,
  Node,
  AvailableParameters,
  Result,
} from '../types'
import { matchParameters } from '../utils'
import { forceMethods } from '../nodes/force'
import { energyFieldMethods } from '../nodes/energyField'

type VisitedNodes = {
  [key: number]: boolean
}

const getNodes = () => {
  return [...forceMethods, ...energyFieldMethods]
}

export const search = async (
  params: Parameters,
  expectedResult: AvailableParameters,
  visitedNodes: VisitedNodes = {}
): Promise<Result | undefined> => {
  const nodes: Node[] = await getNodes()
  for (let i = 0; i < nodes.length; i++) {
    const { parameters, calculate, result: nodeResult } = nodes[i]

    if (
      matchParameters(params, parameters) &&
      !has(visitedNodes, i) &&
      !matchParameters(params, nodeResult)
    ) {
      const res = await calculate(params)
      console.log('result', res)

      const newParams = { ...params, ...res }
      const newVisitedNodes = { ...visitedNodes, [i]: true }

      if (matchParameters(res, expectedResult)) {
        return res
      } else {
        const result = await search(newParams, newVisitedNodes)
        if (result) return result
      }
    }

    // IF parameters match and not visited, THEN call method calculate
    //IF result is expected value THEN add path do history
  }
}
