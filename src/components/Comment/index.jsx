import { Container } from './styles'

export function Comment({ data }) {
  return (
    <Container>
      <h4>{data.name} says:</h4>

      <p>{data.body}.</p>
    </Container>
  )
}
