import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button'

describe('button', () => {
  test('button', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
