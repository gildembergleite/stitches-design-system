import { Heading, HeadingProps } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Title example',
    size: 'xl',
  },
  argTypes: {
    size: {
      options: ['xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, mas pode-se alterará-lo com a propriedade `as`.',
      }
    }
  }
}