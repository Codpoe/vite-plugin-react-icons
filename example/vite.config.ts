import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactIcons from 'vite-plugin-react-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    reactIcons({
      scale: 1.2,
      defaultStyle: 'color: #3498db',
      defaultClass: 'test',
    }),
  ],
});
