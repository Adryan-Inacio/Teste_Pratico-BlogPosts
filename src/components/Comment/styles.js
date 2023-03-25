import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE_SMOKE};

  padding: 3rem;
  border-radius: 1rem;

  :hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE};

    transition: 0.8s;
  }

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
  }
`
