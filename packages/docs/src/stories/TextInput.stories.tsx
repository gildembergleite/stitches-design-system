import { Box, Text, TextInput, TextInputProps } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => (
      <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text size='sm'>Label</Text>
        {Story()}
      </Box>
    )
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter a value',
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'site.com/'
  }
}
