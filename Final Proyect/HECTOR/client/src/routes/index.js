import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import AboutView from './aboutView/aboutView';
import ArtistListView from './artistListView/artistListView'

const getRoutes = function() {
    return (
        <div>
            <Route name="Main" component={MainView} />
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/about" component={AboutView} />
                <Route path="/artist-list" component={ArtistListView} />
            </Switch>
        </div>
    )
};

export default getRoutes;
