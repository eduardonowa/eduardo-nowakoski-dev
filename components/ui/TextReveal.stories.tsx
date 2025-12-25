import type { Meta, StoryObj } from '@storybook/react'
import { TextReveal } from './TextReveal'

const meta = {
  title: 'UI/TextReveal',
  component: TextReveal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content to reveal',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    delay: {
      control: { type: 'number', min: 0, max: 2, step: 0.1 },
      description: 'Initial delay in seconds',
    },
    splitBy: {
      control: 'select',
      options: ['word', 'char'],
      description: 'How to split the text',
    },
  },
} satisfies Meta<typeof TextReveal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Welcome to my portfolio',
    delay: 0,
    splitBy: 'word',
  },
}

export const CharacterSplit: Story = {
  args: {
    children: 'Animated Text',
    delay: 0,
    splitBy: 'char',
  },
}

export const WithDelay: Story = {
  args: {
    children: 'This text appears with a delay',
    delay: 0.5,
    splitBy: 'word',
  },
}

export const LongText: Story = {
  args: {
    children: 'This is a longer text that demonstrates how the TextReveal component handles multiple words and creates a smooth animation effect as each word appears on screen.',
    delay: 0,
    splitBy: 'word',
  },
}

export const CustomClassName: Story = {
  args: {
    children: 'Styled Text',
    delay: 0,
    splitBy: 'word',
    className: 'text-2xl font-bold text-primary',
  },
}

