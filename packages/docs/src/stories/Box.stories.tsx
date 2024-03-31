import { Box, BoxProps } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {},
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    children: (
      <>
        <h1>Box</h1>
      </>
    ),
  }
}