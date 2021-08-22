import { Node } from '../types/index'
import { VACUUM_PERMISITY } from '../utils/constants'

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
      energyField: (charge * VACUUM_PERMISITY) / (Math.pow(distance, 2) || 1),
    }),
  },
]
