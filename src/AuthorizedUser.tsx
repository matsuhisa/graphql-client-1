import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { gql } from '@apollo/client'

interface Props extends RouteComponentProps {}

class AuthorizedUser extends React.Component<Props> {
  state = { signingIn: false }

  componentDidMount() {
    console.log('componentDidMount')
    console.log(window.location.search.match(/code=/))
    if(window.location.search.match(/code=/)) {
      this.setState({ signingIn: true })
      const code = window.location.search.replace("?code=", "")
      alert(code)
      this.props.history.replace('/')
    }
  }

  requestCode() {
    var clientID = process.env.REACT_APP_GITHUB_CLIENT_ID
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`
  }

  render() {
    return (
      <button onClick={this.requestCode} disabled={this.state.signingIn}>
        Sign In with Github
      </button>
    )
  }
}

export default withRouter(AuthorizedUser)
