import * as AvatarComponent from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { styled } from '../styles'

const AvatarContainer = styled(AvatarComponent.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})

const AvatarImage = styled(AvatarComponent.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const AvatarFallback = styled(AvatarComponent.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 'inherit',
  backgroundColor: '$gray-600',
  color: '$gray-200',

  svg: {
    width: '$6',
    height: '$6',
  },
})

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
