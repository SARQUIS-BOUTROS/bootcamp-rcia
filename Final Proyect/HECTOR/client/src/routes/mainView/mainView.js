import './mainView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import HeaderView from '../headerView/headerView'

const spotifyApi = new SpotifyWebApi();

class MainView extends Component {
    constructor() {
        super()
        var token = 'BQDp2o63emdoi9jfuglZhr_A6OZ00JhGaixowzVzG98X0__hx5UpTlGWOqkTmGkaXv_w3y_4pM2CzEjvWsFX8nKJnWq2tirysP3gK-1d9_odUVJKEr9UOF31C7TqjV190NBFEv4kIG1PnXf-XpMTlhqSL2XywTpBIu3UoGw-N-jmHfq2CmiPoBdF\n'


        spotifyApi.setAccessToken(token);
    }

    render() {
        return (
            <article className="main-view">
                <HeaderView/>
                <nav className="main-view__nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/artist-list">Artist List</Link></li>
                    </ul>
                </nav>
            </article>
        );
    }
}

export default MainView;
