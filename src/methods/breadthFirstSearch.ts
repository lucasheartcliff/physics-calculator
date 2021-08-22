import { has } from 'lodash'
import { Parameters, Node, AvailableParameters, Result } from '../types'
import { matchParameters } from '../utils'
import { forceMethods } from '../nodes/force'
import { energyFieldMethods } from '../nodes/energyField'
import { eletricPotencialMethods } from '../nodes/eletricPotencial'
import { frequencyMethods } from '../nodes/frequency'
import { periodMethods } from '../nodes/period'
import { radiusMethods } from '../nodes/radius'
import { magneticFieldMethods } from '../nodes/magneticField'
import { speedMethods } from '../nodes/speed'
import { massMethods } from '../nodes/mass'

type VisitedNodes = {
  [key: number]: boolean
}

const getNodes = () => {
  return [
    ...forceMethods,
    ...energyFieldMethods,
    ...eletricPotencialMethods,
    ...frequencyMethods,
    ...radiusMethods,
    ...periodMethods,

    ...magneticFieldMethods,
    ...massMethods,
    ...speedMethods,
  ]
}

export const search = async (
  params: Parameters,
  expectedResult: AvailableParameters,
  level = 0,
  visitedNodes: VisitedNodes = {}
): Promise<Result | undefined> => {
  if (level > 1000) return undefined

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
        const result = await search(
          newParams,
          expectedResult,
          level + 1,
          newVisitedNodes
        )
        if (result) return result
      }
    }

    // IF parameters match and not visited, THEN call method calculate
    //IF result is expected value THEN add path do history
  }
}
