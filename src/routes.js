import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './components/App'
import ArticlePage from './components/article'
import IndexPage from './components/index'
import NewPage from './components/new'
import NotFound from './components/NotFound'

export default (
    <Router history = {createBrowserHistory()}>
        <Route path = "/article" component = {App}>
            <IndexRoute component = {IndexPage}/>
            <Route path = "new" component = {NewPage}/>
            <Route path = ":id" component = {ArticlePage} />
        </Route>
        <Route path= "*" component = {NotFound} />
    </Router>
)