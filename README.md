# vite-plugin-react-icons

> This plugin is modified from [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons), just for use in react.

Access thousands of icons as React components in Vite

- 90+ iconsets powered by [Iconify](https://github.com/iconify/iconify)
- [Browser the icons](https://icones.js.org/)

## Install

Install the plugin and peer dependency `@iconify/json`

```bash
npm i -D vite-plugin-react-icons @iconify/json
```

Add it to `vite.config.js`

```ts
// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactIcons from 'vite-plugin-react-icons';

export default {
  plugins: [
    reactRefresh(),
    reactIcons(),
  ],
}
```

```jsx
import IconAppConnectivity from 'virtual:vite-icons/carbon/app-connectivity';
import IconAlarmOff from 'virtual:vite-icons/mdi/alarm-off';

function App() {
  return (
    <div>
      <IconAppConnectivity />
      <IconAlarmOff />
    </div>
  );
}
```

## Options

You can set default styling for all icons. 
The following config shows the default values of each option:

```ts
// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactIcons from 'vite-plugin-react-icons';

export default {
  plugins: [
    reactRefresh(),
    reactIcons({
      scale: 1, // Scale of icons against 1em
      defaultStyle: '', // Style apply to icons
      defaultClass: '', // Class names apply to icons
    }),
  ],
}
```
