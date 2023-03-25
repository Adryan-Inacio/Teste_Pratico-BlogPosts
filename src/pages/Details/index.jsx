import { Container } from './styles'
import { Content } from './styles'

import { Header } from '../../components/Header'
import { Comment } from '../../components/Comment'
import { Button } from '../../components/Button'

import { useParams, useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

export function Details() {
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])

  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchPost() {
      const responsePost = await api.get(`/posts/${params.id}`)
      const responseComments = await api.get(`/posts/${params.id}/comments`)

      setPost(responsePost.data)
      setComments(responseComments.data)
    }

    fetchPost()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <h1>Post</h1>
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>

          <div className="comments">
            <h3>Comentários</h3>
            {comments.map(comment => (
              <Comment key={comment.id} data={comment} />
            ))}
          </div>

          <Button title="Voltar" onClick={handleBack} />
        </main>
      </Content>
    </Container>
  )
}
