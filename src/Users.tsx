import React from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'


const ROOT_QUERY = gql`
  query allUsers {
    totalUsers
    allUsers {
      githubLogin
      name
      avatar
    }
  }
`
const ADD_FAKE_USERS_MUTATION = gql`
mutation addFakeUsers($count:Int!) {
  addFakeUsers(count: $count) {
    githubLogin
    name
    avatar
  }
}
`

export const Users = () => {
  const { loading, error, data, refetch } = useQuery(ROOT_QUERY)
  const [ addFakeUser ] = useMutation(ADD_FAKE_USERS_MUTATION)
  let input: any

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  return (
    <>
      <button onClick={ () => refetch() }>Refetch!</button>
      <input ref={ node => { input = node } } />
      <button onClick={ () => { 
        addFakeUser({ variables: { count: Number(input.value) } })
        input.value = 0
      }}> Add FakeUser</button>
      <p>
        {data.allUsers.length}
      </p>
      {data.allUsers.map( (user: { name: any, avatar: any, githubLogin: any }) => 
        <p key={user.githubLogin}>
          {user.name}
          <br />
          <img src={user.avatar} width={48} height={48} />
        </p>
      )}
    </>
  )
}
