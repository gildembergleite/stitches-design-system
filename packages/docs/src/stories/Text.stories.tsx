import { Text, TextProps } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'Typography/Text',
  component: Text,
    args: {
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quas consectetur laudantium sint, cumque reiciendis architecto nesciunt minus unde, itaque sapiente voluptates harum id ea provident animi necessitatibus nemo earum.'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Custom Tag',
    as: 'strong'
  }
}