import { Node } from '../types/index'

export const speedMethods: Node[] = [
  {
    parameters: { distance: true, time: true },
    result: { speed: true },
    calculate: ({ distance, time }) => ({
      speed: distance / (time || 1),
    }),
  },

  {
    parameters: { mass: true, work: true },
    result: { speed: true },
    calculate: ({ mass, work }) => ({
      speed: Math.sqrt((2 * work) / (mass || 1)),
    }),
  },
  {
    parameters: { eletricPotencial: true, charge: true, mass: true },
    result: { speed: true },
    calculate: ({ mass, charge, eletricPotencial }) => ({
      speed: Math.sqrt((2 * charge * eletricPotencial) / (mass || 1)),
    }),
  },
]
