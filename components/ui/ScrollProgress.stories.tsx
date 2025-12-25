import type { Meta, StoryObj } from '@storybook/react'
import { ScrollProgress } from './ScrollProgress'

const meta = {
  title: 'UI/ScrollProgress',
  component: ScrollProgress,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A scroll progress indicator that shows at the top of the page. Scroll the story container to see it in action.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '200vh', padding: '2rem' }}>
        <Story />
        <div style={{ marginTop: '100vh', padding: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Scroll down to see the progress bar</h2>
          <p style={{ marginBottom: '1rem' }}>
            The progress bar at the top will fill as you scroll down this container.
          </p>
          <div style={{ height: '50vh', background: 'var(--color-background-secondary)', borderRadius: '8px', padding: '2rem' }}>
            <h3>More content here</h3>
            <p>Keep scrolling to see the progress bar update.</p>
          </div>
          <div style={{ height: '50vh', background: 'var(--color-background-secondary)', borderRadius: '8px', padding: '2rem', marginTop: '2rem' }}>
            <h3>Even more content</h3>
            <p>The progress bar should be at 100% when you reach here.</p>
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ScrollProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

