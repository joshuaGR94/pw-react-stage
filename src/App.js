import React, { Fragment } from 'react';
import DataTable from './DataTable';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Navigation from './components/navbar/Navigation';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TodosTable from './PostTable';
import CommentsForm from './CommentsForm';


function App() {
    return (
        <Fragment>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/comments" component={DataTable} />
                    <Route path="/todos" component={TodosTable} />
                    <Route path="/form" component={CommentsForm} />
                    <Route component={NotFound} />{/*sempre alla fine*/}
                </Switch>
            </Router>
        </Fragment>


    );
}

export default App