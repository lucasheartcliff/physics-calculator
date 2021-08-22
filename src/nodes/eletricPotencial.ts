import { Node } from '../types/index'
import { VACUUM_PERMISITY } from '../utils/constants'

export const eletricPotencialMethods: Node[] = [
  {
    parameters: { energyField: true, distance: true },
    result: { eletricPotencial: true },
    calculate: ({ energyField, distance }) => ({
      eletricPotencial: energyField * distance,
    }),
  },
  {
    parameters: { distance: true, charge: true },
    result: { eletricPotencial: true },
    calculate: ({ distance, charge }) => ({
      eletricPotencial: (charge * VACUUM_PERMISITY) / (distance || 1),
    }),
  },
  {
    parameters: { radius: true, charge: true },
    result: { eletricPotencial: true },
    calculate: ({ radius, charge }) => ({
      eletricPotencial: (charge * VACUUM_PERMISITY) / (radius || 1),
    }),
  },
]
