import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: 'medium',
  fontFamily: '$default',
  minWidth: 120,
  boxSizing: 'border-box',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  transition: 'all 300ms ease-in-out',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$system-700',
        color: '$white',
        '&:not(:disabled):hover': {
          backgroundColor: '$system-500',
        },
        '&:disabled': {
          backgroundColor: '$gray-200',
        },
      },
      outlined: {
        color: '$system-300',
        border: ' 2px solid $system-700',
        '&:not(:disabled):hover': {
          backgroundColor: '$system-700',
          color: '$white',
        },
        '&:disabled': {
          borderColor: '$gray-200',
          color: '$gray-200',
        },
      },
      link: {
        color: '$gray-100',
        '&:not(:disabled):hover': {
          textDecoration: 'underline',
        },
        '&:disabled': {
          borderColor: '$gray-200',
          color: '$gray-200',
        },
      },
    },
    size: {
      sm: {
        fontSize: 14,
        padding: '$2 $4',
        height: 38,
      },
      md: {
        fontSize: 16,
        padding: '$3 $6',
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
