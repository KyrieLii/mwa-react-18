import { Switch, Route } from '@modern-js/runtime/router';
import { Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <Button>hello react 18</Button>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
