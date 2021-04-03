import { boot } from 'quasar/wrappers';
import { config } from '../overmind';
import { createOvermind } from 'overmind';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  const overmind = createOvermind(config);
  app.provide('overmind', overmind);
});
