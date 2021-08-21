import { Node } from '../types/index'

export const forceMethods: Node[] = [
  {
    parameters: { mass: true, acceleration: true },
    result: { force: true },
    calculate: ({ acceleration, mass }) => ({ force: mass * acceleration }),
  },
]
