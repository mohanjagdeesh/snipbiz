import { render, screen } from '@testing-library/react'
import MyCoupons from '../MyCoupons'

describe('MyCoupons component', () => {
  test('renders My Coupons heading', () => {
    render(<MyCoupons />)
    const couponsHeading = screen.getByTestId('coupons-heading')
    expect(couponsHeading).toBeInTheDocument()
    expect(couponsHeading.textContent).toBe('My Coupons')
  })

  test('renders coupons container', () => {
    render(<MyCoupons />)
    const couponsContainer = screen.getByTestId('coupons-container')
    expect(couponsContainer).toBeInTheDocument()
  })
})
