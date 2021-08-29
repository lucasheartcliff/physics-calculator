import { Node } from '../types/index'
import { ELETRICAL_VACUUM_PERMISSIVITY } from '../utils/constants'

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
      eletricPotencial:
        (charge * ELETRICAL_VACUUM_PERMISSIVITY) / (distance || 1),
    }),
  },
  {
    parameters: { radius: true, charge: true },
    result: { eletricPotencial: true },
    calculate: ({ radius, charge }) => ({
      eletricPotencial:
        (charge * ELETRICAL_VACUUM_PERMISSIVITY) / (radius || 1),
    }),
  },
]
