import {Component} from "react";
import logo from "../../assets/logo.png";
import React from "react";
import { setUserName } from "../../actionsCreators";
import  './headerView.css';
import { connect } from 'react-redux';
import SpotifyWebApi from "spotify-web-api-js";
import SearchView from './searchView/searchView';
import ReactAudioPlayer from "react-audio-player";


const spotifyApi = new SpotifyWebApi();

class HeaderView extends Component {
    constructor() {
        super();
        this.state = {
        };
        spotifyApi
            .getMe()
            .then(data => this.props.setUserName(data.display_name))
            .catch(console.log('Login!'));
    }

    render() {

        return (
            <header className="main-view__header">
                <img src={logo} className="main-view__logo" alt="logo" />
                <p className="name">  Hola { this.props.user_name } </p>
                <SearchView/>
                <ReactAudioPlayer
                    src={this.props.onplay}
                    autoPlay={true}
                    controls
                />
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {user_name: state.user_name,
        onplay: state.onplay}
}
function mapDispatchToProps(dispatch) {

    return {
        setUserName: (name) => dispatch(setUserName(name)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);