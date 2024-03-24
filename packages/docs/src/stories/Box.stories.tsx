import { Box, BoxProps } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {},
  
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