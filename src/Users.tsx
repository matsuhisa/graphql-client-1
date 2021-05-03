import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ROOT_QUERY, ADD_FAKE_USERS_MUTATION } from './Gql'

export const Users = () => {
  const { loading, error, data, refetch } = useQuery(ROOT_QUERY)
  const [ addFakeUser ] = useMutation(ADD_FAKE_USERS_MUTATION, {
    onCompleted() {
      refetch()
    }
  })
  let input: any

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  console.table(data.me)

  return (
    <>
      <button onClick={ () => refetch() }>Refetch!</button>
      <input ref={ node => { input = node } } />
      <button onClick={ () => { 
        addFakeUser({ variables: { count: Number(input.value) } })
        input.value = 1
      }}> Add FakeUser</button>
      <p>
        {data.allUsers.length}
      </p>
      {data.allUsers.map( (user: { name: any, avatar: any, githubLogin: any }) => 
        <p key={user.githubLogin}>
          {user.name}
          <br />
          <img src={user.avatar} width={48} height={48} alt="" />
        </p>
      )}
    </>
  )
}
