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
  const { loading, error, data, refetch } = useQuery(ROOT_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  return (
    <>
      <button onClick={() => refetch()}>Refetch!</button>
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
