import React, { useState, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { GTIHUB_AUTH_MUTATION } from './Gql'

interface Props extends RouteComponentProps {}

const AuthorizedUserButton: React.VFC<Props> = (props) => {
  const [signIn, setSignIn] =  useState(false)
  const [ githubAuth ] = useMutation(GTIHUB_AUTH_MUTATION, {
    onCompleted(data) {
      sessionStorage.setItem('token', data.githubAuth.token)
      props.history.replace('/')
      setSignIn(true)
    }
  })

  // componentDidMount の代わり。useEffect の実行条件をつけている
  useEffect(() => {
    if(window.location.search.match(/code=/)) {
      const code = window.location.search.replace('?code=', '')
      alert(code)
      setSignIn(true)
      githubAuth({ variables: { code: code } })
      props.history.replace('/')
    }
  }, [1])
  
  const requestCode = () => {
    var clientID = process.env.REACT_APP_GITHUB_CLIENT_ID
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`
  }

  return (
    <button onClick={requestCode} disabled={signIn}>
      Sign In with Github
    </button>
  )
}

export const AuthorizedUser = withRouter(AuthorizedUserButton)
