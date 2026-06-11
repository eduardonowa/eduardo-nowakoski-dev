import { render, screen } from '@testing-library/react'
import { SkipLink } from '@/components/ui/SkipLink'
import { I18nProvider } from '@/components/providers/I18nProvider'

describe('SkipLink', () => {
  it('should render skip link with href to main content', () => {
    render(
      <I18nProvider>
        <SkipLink />
      </I18nProvider>
    )

    const link = screen.getByRole('link', { name: /Pular para o conteúdo principal|Skip to main content/i })
    expect(link).toHaveAttribute('href', '#main-content')
  })
})
