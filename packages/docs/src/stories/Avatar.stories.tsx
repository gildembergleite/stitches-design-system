import { Avatar, AvatarProps } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gildembergleite.png',
    alt: 'Gildemberg Leite'
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithoutImage: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}