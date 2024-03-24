import { Button, ButtonProps } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'Form/Button',
  component: Button,
  args: {
    primary: true,
    label: 'Button',
    children: 'Button'
  },
  
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  }
}