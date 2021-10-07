import Home from "../views/home";
import { Route, Switch } from "react-router-dom";
import Tienda from "../views/shop";
import Servicios from "../views/others/Servicios";
import AcercaDe from "../views/others/AcercaDe";
import Contacto from "../views/others/Contacto";
import AvisoLegal from "../views/others/AvisoLegal";
import ConsejosUtiles from "../views/others/ConsejosUtiles";
import NotFound from "../views/errors";
import SignUpUsers from "../views/login/SignUpUsers";

const index = () => {
  return (
    <>
      <Switch>
        <Route exact path="/tienda">
          <Tienda />
        </Route>
        <Route exact path="/servicios">
          <Servicios />
        </Route>
        <Route exact path="/acerca-de">
          <AcercaDe />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        <Route exact path="/aviso-legal">
          <AvisoLegal />
        </Route>
        <Route exact path="/consejos-utiles">
          <ConsejosUtiles />
        </Route>
        <Route exact path='/sign-up'>
          <SignUpUsers />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      
      </Switch>
    </>
  );
};

export default index;
