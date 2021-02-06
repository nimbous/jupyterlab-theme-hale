import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for jupyterlab-theme-hale
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-hale:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = 'jupyterlab-theme-hale/index.css';

    manager.register({
      name: 'JupyterLab Hale Theme',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
