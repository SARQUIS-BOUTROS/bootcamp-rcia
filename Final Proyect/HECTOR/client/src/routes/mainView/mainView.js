import './mainView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import HeaderView from '../headerView/headerView';
import { connect } from 'react-redux';
import {favorites} from "../../actionsCreators";

const spotifyApi = new SpotifyWebApi();

class MainView extends Component {
    constructor() {
        super()
        var token = 'BQC26hNoyFh20_uM4i7fsAEIcSZ78Ce-cb2BA_FnMLDOwHohsfvtyb7jWQnPgtZCbfaJGqIiTjt5C6nJAn9MWaAym391EOWg8GkASFg9wFfIscVqNhgDnpdMez-AJwinThxZjWDb8WD2UjS6rT45W81fzdi7JH0yq5jMn2HQdd9CjHyKjQYLyx5f1Q_FWZ-M8ONIUv9K-OUsQQ\n'
        spotifyApi.setAccessToken(token);

    }
    componentDidMount() {
        spotifyApi.getMySavedTracks()
            .then(data =>
                this.props.favorites({data}))
            .catch(console.log('error'));
    }

    render() {
        return (
            <article className="main-view">
                <HeaderView/>
                <nav className="main-view__nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/artist-list/">Artist List</Link></li>
                    </ul>
                </nav>
            </article>
        );
    }
}

function mapStateToProps(state) {
    return {
        favorites:state.favorites
    }
}

function mapDispatchToProps(dispatch) {

    return {
        favorites: (list) => dispatch(favorites(list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
