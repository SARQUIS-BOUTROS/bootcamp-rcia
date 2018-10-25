import './mainView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi();


class MainView extends Component {
    constructor() {
        super()
        const params = this.getHashParams()
    }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    render() {
        return (
            <article className="main-view">
                <header className="main-view__header">
                    <img src={logo} className="main-view__logo" alt="logo" />
                    <div className='App'>
                        <a href='http://localhost:8888'> Login to Spotify </a>
                    </div>
                </header>
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
