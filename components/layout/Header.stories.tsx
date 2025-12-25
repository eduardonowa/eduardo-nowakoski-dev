import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Header } from './Header'

const meta = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div style={{ paddingTop: '80px', minHeight: '200vh', padding: '2rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>Page Content</h1>
          <p style={{ marginBottom: '1rem' }}>
            This is a demo of the Header component. The header is fixed at the top and includes:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '2rem' }}>
            <li>Navigation links</li>
            <li>Language toggle (PT/EN)</li>
            <li>Theme toggle (Dark/Light)</li>
            <li>Mobile menu</li>
          </ul>
          <div style={{ height: '100vh', background: 'var(--color-background-secondary)', borderRadius: '8px', padding: '2rem' }}>
            <h2>Scroll to see header behavior</h2>
            <p>The header background changes when you scroll down.</p>
          </div>
        </div>
      </div>
    ),
  ],
}

export const Scrolled: Story = {
  decorators: [
    (Story) => {
      React.useEffect(() => {
        const timer = setTimeout(() => {
          window.scrollTo(0, 100)
        }, 100)
        return () => clearTimeout(timer)
      }, [])
      
      return (
        <div>
          <Story />
          <div style={{ paddingTop: '80px', minHeight: '200vh', padding: '2rem' }}>
            <div style={{ marginTop: '100px' }}>
              <h1>Scrolled State</h1>
              <p>The header should have a background and border when scrolled.</p>
            </div>
          </div>
        </div>
      )
    },
  ],
}

