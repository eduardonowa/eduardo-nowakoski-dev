import type { Preview } from '@storybook/nextjs-vite'
import React from 'react'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import { I18nProvider } from '../components/providers/I18nProvider'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#282a36',
        },
      ],
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider>
        <I18nProvider>
          <div className="min-h-screen bg-background text-text">
            <Story />
          </div>
        </I18nProvider>
      </ThemeProvider>
    ),
  ],
};

export default preview;