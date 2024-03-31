import { Box, Checkbox, CheckboxProps, Text } from '@gildembergleite/react'
import type { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <Box as='label' css={{ display: 'flex', gap: '$2' }}>
        {Story()}
        <Text size='sm'>Accept terms of use</Text>
      </Box>
    )
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true
  }
}