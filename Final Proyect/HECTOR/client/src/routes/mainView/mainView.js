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
        var token = 'BQD-YRlIh9_ia0bgu0d1la54pwe3tf2jFKHGvPF_TtW6T_I_uavKsEZmKeXaFPKYJYOG81HuyTEllb51V26fstZ3yb0m-PsRqNYl7bd0QgEID0WpuARXjzx-7U_bRNFHXNhAB04UyVUWYf8EQyp-JWs_EP479jd7ZhqTimm-JWu7KMeKhopRvbhtFYCL5dRwmBlTV6TxRVBoGw\n'
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
