import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  backgroundColor: '$system-300',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontWeight: 'bold',
  color: '$white',
  border: 0,
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      medium: {
        fontSize: 16,
        padding: '$3 $6',
      },
      large: {
        fontSize: 18,
        padding: '$4 $8',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
