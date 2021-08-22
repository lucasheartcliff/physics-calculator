import { Node } from '../types/index'

export const magneticFieldMethods: Node[] = [
  {
    parameters: { force: true, charge: true, speed: true },
    result: { magneticField: true },
    calculate: ({ force, charge, speed }) => ({
      magneticField: force / (Math.abs(charge) * speed || 1),
    }),
  },
]
