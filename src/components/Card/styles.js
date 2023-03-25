import styled from 'styled-components'

export const Container = styled.div`
  width: 34rem;

  background-color: ${({ theme }) => theme.COLORS.WHITE_SMOKE};

  padding: 3rem;
  border-radius: 5rem;

  font-weight: 500;

  margin-bottom: 3rem;

  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE};

    transition: 0.8s;
  }

  main {
    text-align: center;
    width: 25rem;
    height: 15rem;
  }

  h2 {
    margin-bottom: 3rem;
  }
`
