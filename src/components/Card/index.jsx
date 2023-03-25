import { Container } from './styles'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

export function Card({ data, ...rest }) {
  const [users, setUsers] = useState([])

  async function fetchUsers() {
    const response = await api.get(`/users/${data.userId}`)

    setUsers(response.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Container {...rest}>
      <main>
        <h2>Posted by {users.username}</h2>

        <h2>{data.title}</h2>
      </main>
    </Container>
  )
}
