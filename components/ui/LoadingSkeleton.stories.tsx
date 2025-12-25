import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LoadingSkeleton } from './LoadingSkeleton'

const meta = {
  title: 'UI/LoadingSkeleton',
  component: LoadingSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

