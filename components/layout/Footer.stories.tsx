import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer } from './Footer'

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, padding: '2rem' }}>
          <h1>Page Content</h1>
          <p>This is a demo of the Footer component. Scroll down to see the footer at the bottom.</p>
        </div>
        <Story />
      </div>
    ),
  ],
}

