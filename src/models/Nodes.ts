import {
  AvailableParameters,
  Node as INode,
  Parameters,
  Result,
} from '../types'

export default class Node implements INode {
  public parameters: AvailableParameters
  public calculate: (p: Parameters) => Result
  public result: AvailableParameters

  constructor({ parameters, calculate, result }: INode) {
    this.parameters = parameters
    this.calculate = calculate
    this.result = result
  }

  getStep() {
    return this.calculate.toString()
  }
}
