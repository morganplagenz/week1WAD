import React from 'react';

export default class LoginForm extends React.Component {
    render (){
        return <div style={ 
                {display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '50px'}
            }>
            <form style = {
                {border: '2px solid #ba135d',
                paddingLeft: '150px',
                paddingRight: '150px' }
            }>
                <h1>Login Page</h1>
                <h2>Username:</h2><input type="text" name="user-name" placeholder="Enter Your Username" />
                <br />
                <h2>Password:</h2><input type="password" name="password" placeholder = "Enter Your Password" />
                <br />
                <br />
                <div style={ 
                    {display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                        <button><h3>Login</h3></button>
                </div>
                <br />
            </form>

        </div>
        
    }
}