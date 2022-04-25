import SignUp from './SignUp.vue'
import { render, screen } from '@testing-library/vue'

describe('SignUp.vue', () => {
  describe('Layout', () => {
    it('has username input', () => {
      render(SignUp)
      const input = screen.getByTestId('username')
      expect(input).toBeDefined()
    })
    it('has email input', () => {
      render(SignUp)
      const input = screen.getByTestId('email')
      expect(input).toBeDefined()
    })
    it('has password input', () => {
      render(SignUp)
      const input = screen.getByTestId<HTMLInputElement>('password')
      expect(input).toBeDefined()
      expect(input.type).toBe('password')
    })
  })
  // it('has Sign Up header', () => {
  //   const wrapper = mount(SignUp)
  //   expect(wrapper.html()).toContain('Signup')
  // })
})
