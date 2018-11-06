import {Component} from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
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
                <section className={'data'}>
                    <Link to='/'> <img src={logo} className="main-view__logo" alt="logo" /></Link>

                </section>

                <section className={'music'}>
                    <h6 className="user"><i className="material-icons">face</i>Hola { this.props.user_name } </h6>
                    <SearchView/>
                    <ReactAudioPlayer
                        src= {this.props.onplay}
                        autoPlay={true}
                        controls
                        height= '200px'
                    />
                </section>

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