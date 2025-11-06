import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the main heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /Vite \+ React/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render the counter button with initial count of 0', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()
  })

  it('should increment counter when button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    await user.click(button)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('should increment counter multiple times on repeated clicks', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    await user.click(button)
    await user.click(button)
    await user.click(button)
    expect(screen.getByRole('button', { name: /count is 3/i })).toBeInTheDocument()
  })

  it('should render Vite logo link', () => {
    render(<App />)
    const viteLink = screen.getByRole('link', { name: /Vite logo/i })
    expect(viteLink).toHaveAttribute('href', 'https://vitejs.dev')
    expect(viteLink).toHaveAttribute('target', '_blank')
  })

  it('should render React logo link', () => {
    render(<App />)
    const reactLink = screen.getByRole('link', { name: /React logo/i })
    expect(reactLink).toHaveAttribute('href', 'https://react.dev')
    expect(reactLink).toHaveAttribute('target', '_blank')
  })

  it('should render the HMR instruction text', () => {
    render(<App />)
    const instruction = screen.getByText(/Edit.*src\/App.tsx.*and save to test HMR/i)
    expect(instruction).toBeInTheDocument()
  })

  it('should render the documentation link instruction', () => {
    render(<App />)
    const docInstruction = screen.getByText(/Click on the Vite and React logos to learn more/i)
    expect(docInstruction).toBeInTheDocument()
  })
})