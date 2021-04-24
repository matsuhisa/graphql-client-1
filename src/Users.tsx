import React from 'react'
import { gql, useQuery } from '@apollo/client'

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

export const Users = () => {
  const { loading, error, data } = useQuery(ROOT_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  return (
    <>
      {data.allUsers.map( (user: { name: any, avatar: any, githubLogin: any }) => 
        <p key={user.githubLogin}>
          {user.name}
          <br />
          {user.avatar}
        </p>
      )}
    </>
  )
}
