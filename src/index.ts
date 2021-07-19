import type { Plugin } from 'vite';
import { UserOptions, ResolvedOptions } from './types';
import {
  generateComponentFromPath,
  isIconPath,
  normalizeIconPath,
} from './loader';

function vitePluginReactIcons(userOptions: UserOptions = {}): Plugin {
  let options: ResolvedOptions;

  return {
    name: 'vite-plugin-react-icons',
    enforce: 'post',
    configResolved() {
      options = Object.assign(
        {
          scale: 1,
          defaultStyle: '',
          defaultClass: '',
        },
        userOptions
      );
    },
    resolveId(id) {
      if (isIconPath(id)) {
        // need to a relative path in for vite to resolve node_modules in build
        return normalizeIconPath(id).replace(/^\//, '');
      }
      return null;
    },
    async load(id) {
      if (isIconPath(id)) {
        return (await generateComponentFromPath(id, options)) || null;
      }
      return null;
    },
  };
}

export * from './types';

export default vitePluginReactIcons;
