import { Node } from '../types/index'
import { ELETRICAL_VACUUM_PERMISSIVITY } from '../utils/constants'

export const energyFieldMethods: Node[] = [
  {
    parameters: { force: true, charge: true },
    result: { energyField: true },
    calculate: ({ force, charge }) => ({
      energyField: force / (charge || 1),
    }),
  },
  {
    parameters: { distance: true, charge: true },
    result: { energyField: true },
    calculate: ({ distance, charge }) => ({
      energyField:
        (charge * ELETRICAL_VACUUM_PERMISSIVITY) / (Math.pow(distance, 2) || 1),
    }),
  },
]
