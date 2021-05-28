import { Route, Switch, Redirect } from 'react-router-dom';


import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import QuotesDetail from './pages/QuoteDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuotesDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
