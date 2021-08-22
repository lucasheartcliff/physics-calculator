import { Node } from '../types/index'
import { PI } from '../utils/constants'

export const frequencyMethods: Node[] = [
  {
    parameters: { period: true },
    result: { frequency: true },
    calculate: ({ period }) => ({
      frequency: 1 / (period || 1),
    }),
  },

  //Angular Frequency
  {
    parameters: { frequency: true },
    result: { angularFrequency: true },
    calculate: ({ frequency }) => ({
      angularFrequency: 2 * PI * frequency,
    }),
  },
]
