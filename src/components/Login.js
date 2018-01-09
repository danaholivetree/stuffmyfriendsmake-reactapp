import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types'

const Login = ({loadData}) => {

    return (
      <FacebookLogin
        appId="135045367176902"
        autoLoad={true}
        fields="name,email,picture"
        returnScopes={true}
        scope="public_profile,user_friends,email"
        callback={loadData}
      />
    )
}

Login.propTypes = {
  loadData: PropTypes.func.isRequired
}

export default Login;
