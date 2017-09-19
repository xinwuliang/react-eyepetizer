import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { ConnectedRouter } from 'react-router-redux'

import Bundle from './bundle'
import Loading from '../components/Loading/Loading'

import NotFound from 'bundle-loader?lazy&name=notFound!../views/NotFound/NotFound'
import Home from 'bundle-loader?lazy&name=Home!../views/Home/Home'
import Detail from 'bundle-loader?lazy&name=Detail!../views/Detail/Detail'
import Author from 'bundle-loader?lazy&name=Author!../views/Author/Author'
import SearchArea from 'bundle-loader?lazy&name=SearchArea!../views/SearchArea/SearchArea'


/*import NavMenu from './nav'*/


import createHistory from 'history/createHashHistory'


import {home, detail, author, searchArea} from './link.js'

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
)

let open = false


const getRouter = () => (
    <ConnectedRouter history={createHistory()}>  
        <div className="routes">
           { /*<NavMenu></NavMenu>  */}
            <Switch>  
                <Route exact path={home} component={createComponent(Home)}/>
                <Route path={`${detail}/:id`} component={createComponent(Detail)}/>  
                <Route path={detail} component={createComponent(Detail)}/>         
                <Route path={`${author}/:id`} component={createComponent(Author)}/>         
                <Route path={author} component={createComponent(Author)}/>         
                <Route path={searchArea} component={createComponent(SearchArea)}/>         
                <Route component={createComponent(NotFound)}/>
            </Switch>
        </div>
    </ConnectedRouter>
)
export default getRouter
