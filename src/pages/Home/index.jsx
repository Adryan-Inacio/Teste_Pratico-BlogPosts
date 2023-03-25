import { Container } from './styles'
import { Content } from './styles'

import { Card } from '../../components/Card'
import { Header } from '../../components/Header'

import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { useNavigate } from 'react-router-dom'

export function Home() {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const responsePosts = await api.get('/posts')

    setPosts(responsePosts.data)
  }

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <h1>Posts</h1>

          <div className="posts">
            {posts.map(post => (
              <Card
                key={post.id}
                data={post}
                onClick={() => handleDetails(post.id)}
              />
            ))}
          </div>
        </main>
      </Content>
    </Container>
  )
}
