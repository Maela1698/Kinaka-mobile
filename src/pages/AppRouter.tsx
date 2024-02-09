// In a separate file, e.g., AppRouter.tsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Acceuil from './Acceuil';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/acceuil" component={Acceuil} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
