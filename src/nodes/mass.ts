import { Node } from '../types/index'

export const massMethods: Node[] = [
  {
    parameters: { force: true, acceleration: true },
    result: { mass: true },
    calculate: ({ acceleration, force }) => ({
      mass: force / (acceleration || 1),
    }),
  },
  {
    parameters: { charge: true, speed: true, magneticField: true },
    result: { mass: true },
    calculate: ({ magneticField, speed, charge }) => ({
      mass: (Math.abs(charge) * magneticField) / (speed || 1),
    }),
  },
  {
    parameters: { density: true, volume: true },
    result: { mass: true },
    calculate: ({ density, volume }) => ({
      mass: density * volume,
    }),
  },
]
