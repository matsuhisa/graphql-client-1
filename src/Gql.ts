import { gql } from '@apollo/client'

export const ROOT_QUERY = gql`
  query allUsers {
    totalUsers
    allUsers { ...userInfo }
    me { ...userInfo }
  }

  fragment userInfo on User {
    githubLogin
    name
    avatar
  }
`

export const GTIHUB_AUTH_MUTATION = gql `
  mutation githubAuth($code:String!) {
    githubAuth(code: $code) {
      token
    }
  }
`

export const ADD_FAKE_USERS_MUTATION = gql`
  mutation addFakeUsers($count:Int!) {
    addFakeUsers(count: $count) {
      githubLogin
      name
      avatar
    }
  }
`
