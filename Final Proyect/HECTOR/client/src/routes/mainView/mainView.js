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
        var token = 'BQCxaNa8kWL9nts5WBn_iHDeC4HcdQj88yC57vXjkRNfFaoG-4fNZdc1IqjGtp5msOqLrV6PJSM3NRupb4TR5675xQ31N6ULJTFpcWtIIktT6pBBZ8_aQvwGBNoUcsykwqVb_e5eMS1cOTX58mk-oBF_KQaH_K1kTgBDAMLJ8INlMQiHUH0Wsi0t7SlacFr5p1FqoUuypegArw\n'
        spotifyApi.setAccessToken(token);
    }
    /*
    Get favorites songs.
     */
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
