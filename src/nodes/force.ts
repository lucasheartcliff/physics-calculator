import _ from 'lodash'
import { Node } from '../types/index'

export const forceMethods: Node[] = [
  {
    parameters: { mass: true, acceleration: true },
    result: { force: true },
    calculate: ({ acceleration, mass }) => ({
      force: mass * acceleration,
    }),
  },
  {
    parameters: { charge: true, energyField: true },
    result: { force: true },
    calculate: ({ charge, energyField }) => ({
      force: charge * energyField,
    }),
  },
  {
    parameters: { charge: true, magneticField: true, speed: true },
    result: { force: true },
    calculate: ({ charge, magneticField, speed, angle = 90 }) => ({
      force: Math.abs(charge) * speed * magneticField * Math.sin(angle),
    }),
  },
]
