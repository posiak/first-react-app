import React from "react";
import {Route, Redirect} from 'react-router-dom'

const permision = false;

const AdminPage = () => {
  return (
    <Route render={()=> {return(permision? (<h3>Panel admina elo</h3>) : (<Redirect to = '/login'/>))}} />
  );
};

export default AdminPage;
