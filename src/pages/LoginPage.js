import React from 'react';

const LoginPage = () => {
    return ( <div><label htmlFor = "">Podaj login</label><input type = "text"></input>
    <br/>
    <label htmlFor = "">Podaj haslo</label><input type = "password"></input>
    <br/>
    <button>zaloguj</button>
    </div> );
}
 
export default LoginPage;