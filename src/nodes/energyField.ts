import { Node } from '../types/index'

export const energyFieldMethods: Node[] = [
  {
    parameters: { force: true, charge: true },
    result: { energyField: true },
    calculate: ({ force, charge }) => ({ energyField: force / (charge || 1) }),
  },
]
