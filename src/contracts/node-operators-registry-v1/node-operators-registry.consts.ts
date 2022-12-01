import { CHAINS } from '@lido-nestjs/constants';

export const NODE_OPERATORS_REGISTRY_V1_TOKEN = Symbol(
  'NODE_OPERATORS_REGISTRY_V1',
);
export const NODE_OPERATORS_REGISTRY_V1_ADRESSES = {
  [CHAINS.Mainnet]: '0x797C1369e578172112526dfcD0D5f9182067c928',
  [CHAINS.Goerli]: '0xb1f3f45360Cf0A30793e38C18dfefCD0d5136f9a',
};