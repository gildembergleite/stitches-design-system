import { ComponentProps } from 'react'
import { Text } from '../index'
import { styled } from '../styles'

const MultiStepContainer = styled('div', {})

const Label = styled(Text, {
  color: '$gray-200',
  fontFamily: '$default',
  fontSize: '$xs',
})

const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  marginTop: '$1',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
})

const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray-600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray-100',
      },
    },
  },
})

export interface MultiStepProps
  extends ComponentProps<typeof MultiStepContainer> {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  const arrayOfSteps = Array.from({ length: size }, (_, i) => i + 1)

  return (
    <MultiStepContainer>
      <Label>
        Step {currentStep} of {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {arrayOfSteps.map((step) => (
          <Step key={step} active={step <= currentStep && true} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}
