import { Node } from '../types/index'

export const radiusMethods: Node[] = [
  {
    parameters: {
      mass: true,
      magneticField: true,
      charge: true,
      speed: true,
    },
    result: { radius: true },
    calculate: ({ mass, magneticField, charge, speed }) => ({
      radius: (speed * mass) / (Math.abs(charge) * magneticField || 1),
    }),
  },
  {
    parameters: {
      angle: true,
      distance: true,
    },
    result: { radius: true },
    calculate: ({ angle, distance }) => ({
      radius: (distance * angle) / 360,
    }),
  },
]
