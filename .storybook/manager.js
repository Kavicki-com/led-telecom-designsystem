import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
    theme: themes.light,
    // Configurações específicas para GitHub Pages
    showPanel: true,
    panelPosition: 'bottom',
    enableShortcuts: true,
    showToolbar: true,
    selectedPanel: 'storybook/controls/panel',
    initialActive: 'sidebar',
    sidebar: {
        showRoots: true,
        collapsedRoots: ['other'],
    },
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
});
