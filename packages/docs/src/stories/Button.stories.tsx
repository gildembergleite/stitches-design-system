import { Button, ButtonProps } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    label: 'Button',
    children: 'Button',
    variant: 'primary',
    disabled: false,
    size: 'md',
  },
  argTypes: {
    variant: {
      options: ['primary', 'outlined', 'link'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onClick: {
      action: 'click'
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  },
}

export const WihIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
      Next
      <ArrowRight weight='bold' />
      </>
    )
  },
}


export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
  }
}

export const Link: StoryObj<ButtonProps> = {
  args: {
    variant: 'link',
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  }
}