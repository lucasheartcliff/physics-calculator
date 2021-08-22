import { Node } from '../types/index'

export const massMethods: Node[] = [
  {
    parameters: { force: true, acceleration: true },
    result: { mass: true },
    calculate: ({ acceleration, force }) => ({
      mass: force / (acceleration || 1),
    }),
  },
 
]
