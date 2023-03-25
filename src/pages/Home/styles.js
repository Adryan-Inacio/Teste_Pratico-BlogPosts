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

  main {
    width: 50%;

    margin: 0 auto 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 4rem;
      margin-top: 13rem;
      margin-bottom: 5rem;
    }

    .posts {
      display: grid;
      grid-template-columns: 37rem 37rem;
      justify-items: center;
      margin-bottom: 5rem;
    }

    .post {
      width: 34rem;
      margin-bottom: 5rem;
    }
  }
`
