import React from 'react';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import ArtistListView from './artistListView/artistListView';
import HomeView from './homeView/homeView';
import ArtistAlbumView from './artistAlbumsView/artistAlbumsView';
import PlayListView from './playListView/playListView'

const getRoutes = function() {
    return (
        <BrowserRouter>
        <div>
            <Route name="Main" component={MainView} />
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/artist-list/:search" component={ ArtistListView }/>
                <Route path="/artist-albums/:albums" component={ArtistAlbumView}/>
                <Route path="/album-playlist/:album" component={PlayListView}/>
            </Switch>
        </div>
        </BrowserRouter>

            )
};
export default getRoutes;
