import type { Preview } from '@storybook/react';
import '@monorepo/common/src/styles/common.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
