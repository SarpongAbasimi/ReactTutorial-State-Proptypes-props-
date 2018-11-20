import React from 'react'
import NavBar from './components/nav'
import userData from './components/data'
import Welcome from './components/welcome'

import PropTypes from 'prop-types';

class App extends React.Component{
    render(){
        return(
            <div>
            <NavBar />
            <Welcome name={userData[0].name}>
                <p> I was told {userData[0].name} that these were your hobbies 
                 {userData[0].hobby.map((nameHobby)=><li key={nameHobby}>{nameHobby}</li>)}
                </p>
            </Welcome>
            </div>
        );
    }
}

App.propTypes={
    userData:PropTypes.array,
    name:PropTypes.string
}

export default App