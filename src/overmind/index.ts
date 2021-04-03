import { IConfig, IContext } from 'overmind';
import * as actions from './actions';

import { createHooks } from 'overmind-vue/vue3';
import state from './state';

export const config = {
  state,
  actions,
};

export type Config = IConfig<{
  state: typeof config.state;
  actions: typeof config.actions;
}>;

export type Context = IContext<Config>;

export const useOvermind = createHooks();
