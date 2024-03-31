import { Box, Text, TextArea, TextAreaProps } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => (
      <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text size='sm'>Message</Text>
        {Story()}
      </Box>
    )
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Enter a value',
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}
