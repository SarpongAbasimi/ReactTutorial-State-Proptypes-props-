import React from 'react'


const homeElements = ['Home','Contact','About']

const NavBar= (props)=> {

    //styling navContainer
    const navContainerStyle={
        backgroundColor:'rgb(232,245,253)',
        borderRadius:'5px',
        height:50,
        width:'90%',
        padding:'10px'
    }
    
    const ulStyling = {
        display:'flex',
        justifyContent:'flex-end',
    }

    const liStyling ={
        listStyleType:'none',
        alignSelf: 'center',
        margin:'5px',
        color:'#606060'
    }
    return(
        <div className='navContainer' style={navContainerStyle}>
            <ul className='liContainer' style={ulStyling}>
                {homeElements.map((eachNavLink)=><li  style={liStyling}  key={eachNavLink.toString()}>{eachNavLink}</li>)}
            </ul>
        </div>
    );
}


export default NavBar