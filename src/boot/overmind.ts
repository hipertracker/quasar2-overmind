import '../shims';
import { boot } from 'quasar/wrappers';
import { config } from '../overmind';
import { createOvermind } from 'overmind';

// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  const overmind = createOvermind(config, { devtools: true });
  app.provide('overmind', overmind);
});
