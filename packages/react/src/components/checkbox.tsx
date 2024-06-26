import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { keyframes, styled } from '../styles'

const CheckboxContainer = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray-900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $gray-900',

  '&:focus': {
    borderColor: '$system-300',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$system-300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0%)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0%)',
  },
  to: {
    transform: 'translateY(100%)',
  },
})

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
