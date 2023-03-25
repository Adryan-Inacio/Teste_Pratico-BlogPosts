import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    'header'
    'content';
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  main {
    width: 50%;

    margin: 0 auto 10rem;
    padding: 0 2rem;

    h1 {
      font-size: 4rem;
      margin-top: 13rem;
      text-align: center;
    }

    .post {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.COLORS.WHITE_SMOKE};
      border-radius: 1rem;

      margin-top: 3rem;
      margin-bottom: 3rem;
      padding: 4rem 3rem 7rem;

      h2 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 3rem;
      }

      p {
        text-align: center;

        font-size: 2rem;
        margin-top: 1.5rem;
      }
    }

    .comments {
      display: flex;
      flex-direction: column;

      gap: 1rem;

      h3 {
        display: flex;
        align-self: center;
        font-size: 3.5rem;
        margin-bottom: 1rem;
      }

      .comment {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
    }

    button {
      margin-top: 3rem;
      margin-bottom: 10rem;
    }
  }
`
