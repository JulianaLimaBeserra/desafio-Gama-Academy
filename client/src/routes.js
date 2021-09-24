import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';


import Usuarios from './pages/admin/usuarios';
import UsuariosEditar from './pages/admin/usuarios/usuarios.editar';
import UsuariosCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

//pode ser que eu tire essa linha, nao tenho certeza sobre ela
//import UsuariosDetails from './pages/admin/usuarios/usuarios.details';

//IMPORTS CLIENT
import Home from './pages/client/home';

import UsuariosDetails from './pages/client/usuario/usuarios.details';



export default function Routes() {

  return (
    <BrowserRouter>
        <Switch>
          {/* Rota Client */}
          <Route path="/" exact component={Home} />
          <Route path="/usuarios/:idUsuario" exact component={UsuariosDetails} />
 
          {/* Rota Admin */}
          <Route path="/admin" exact component={Dashboard}/>
          {/* Preciso revisar se o usuario esta certo */}
          <Route path="/admin/usuarios" exact component={Usuarios}/>
          <Route path="/admin/usuarios/cadastrar" exact component={UsuariosCadastrar}/>
          <Route path="/admin/usuarios/editar:idUsuario" exact component={UsuariosEditar}/>
        </Switch>

    </BrowserRouter>
  )
}
