import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$system-500',
  borderRadius: '$md',
  fontFamily: '$default',
})

export function App() {
  return (
    <main>
      <section>
        <Button>Button</Button>
      </section>
    </main>
  )
}
