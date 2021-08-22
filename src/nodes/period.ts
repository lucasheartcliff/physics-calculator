import { Node } from '../types/index'
import { PI } from '../utils/constants'

export const periodMethods: Node[] = [
  {
    parameters: { radius: true, speed: true },
    result: { period: true },
    calculate: ({ radius, speed }) => ({
      period: (2 * PI * radius) / (speed || 1),
    }),
  },
  {
    parameters: { mass: true, charge: true, magneticField: true },
    result: { period: true },
    calculate: ({ mass, charge, magneticField }) => ({
      period: (2 * PI * mass) / (Math.abs(charge) * magneticField || 1),
    }),
  },
]
