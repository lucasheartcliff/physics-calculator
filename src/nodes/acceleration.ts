import { Node } from '../types/index'

export const accelerationMethods: Node[] = [
  {
    parameters: { force: true, mass: true },
    result: { acceleration: true },
    calculate: ({ mass, force }) => ({
      acceleration: force / (mass || 1),
    }),
  },
  {
    parameters: { speed: true, radius: true },
    result: { acceleration: true },
    calculate: ({ speed, radius }) => ({
      acceleration: Math.pow(speed, 2) / (radius || 1),
    }),
  },
]
