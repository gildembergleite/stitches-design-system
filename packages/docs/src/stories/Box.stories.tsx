import { Box, BoxProps, Heading, Text } from '@gildembergleite/react'
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
        <Heading>Box title</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque expedita ex, voluptate ullam minima inventore non. Blanditiis maxime natus, dolores sequi labore, nostrum repellat est in necessitatibus vitae dolor nihil!</Text>
      </>
    ),
  }
}