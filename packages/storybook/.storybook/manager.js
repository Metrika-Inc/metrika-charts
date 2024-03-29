import { addons } from '@storybook/addons';

import { create } from '@storybook/theming';

const metrikaStoryTheme = create({
   base: 'light',
   brandTitle: 'metrika-charts',
   brandUrl: 'https://metrika-inc.github.io/metrika-charts',
   brandImage: 'logo.svg',
});

addons.setConfig({
   theme: metrikaStoryTheme,
   sidebar: {
      showRoots: true,
   },
});
