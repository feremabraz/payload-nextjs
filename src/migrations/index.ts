import * as migration_20250404_194215_initial from './20250404_194215_initial';
import * as migration_20250610_231956 from './20250610_231956';
import * as migration_20250611_021033 from './20250611_021033';
import * as migration_20250611_031432 from './20250611_031432';
import * as migration_20250611_032950 from './20250611_032950';

export const migrations = [
  {
    up: migration_20250404_194215_initial.up,
    down: migration_20250404_194215_initial.down,
    name: '20250404_194215_initial',
  },
  {
    up: migration_20250610_231956.up,
    down: migration_20250610_231956.down,
    name: '20250610_231956',
  },
  {
    up: migration_20250611_021033.up,
    down: migration_20250611_021033.down,
    name: '20250611_021033',
  },
  {
    up: migration_20250611_031432.up,
    down: migration_20250611_031432.down,
    name: '20250611_031432',
  },
  {
    up: migration_20250611_032950.up,
    down: migration_20250611_032950.down,
    name: '20250611_032950'
  },
];
