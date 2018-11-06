import './mainView.css';
import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import HeaderView from '../headerView/headerView';
import { connect } from 'react-redux';
import {favorites} from "../../actionsCreators";

const spotifyApi = new SpotifyWebApi();

class MainView extends Component {
    constructor() {
        super()
        var token = 'BQACq8Da8liMygWPaCngoKW4Y6QoQEeyW5Ev48JIMrMz57_frX3SbwWySBu3ltGSTHySI563qjAt4Ekc_GPktS9E-P3-_Zh_EJ5XQxjEN3_ul6yxrs9dX62-PQOUFv-QQooFRd_68cfdF7mK_T0lt-mh7hb2t-FFtZpAjLoPz06RrKEdfDZ0kiI2UxOgdcWTnmKYKfYmOGedPQ\n'
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
