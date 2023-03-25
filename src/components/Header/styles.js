import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;

  position: fixed;

  width: 100%;
  height: 10rem;

  background-color: black;
  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BLUE};

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5rem;
    color: ${({ theme }) => theme.COLORS.BLUE};

    cursor: default;
  }
`
