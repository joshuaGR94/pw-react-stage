import React, { Fragment } from 'react';
import DataTable from './pages/DataTable';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Navigation from './pages/navbar/Navigation';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TodosTable from './pages/PostTable';
import CommentsForm from './pages/CommentsForm';
import prova from './pages/prova';
import DoubleTable from './pages/DoubleTable';


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
                    <Route path="/double_table" component={DoubleTable} />
                    <Route component={NotFound} />{/*sempre alla fine*/}
                </Switch>
            </Router>
        </Fragment>


    );
}

export default App