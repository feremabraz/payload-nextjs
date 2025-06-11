import * as migration_20250404_194215_initial from './20250404_194215_initial';
import * as migration_20250610_231956 from './20250610_231956';

export const migrations = [
  {
    up: migration_20250404_194215_initial.up,
    down: migration_20250404_194215_initial.down,
    name: '20250404_194215_initial',
  },
  {
    up: migration_20250610_231956.up,
    down: migration_20250610_231956.down,
    name: '20250610_231956'
  },
];
