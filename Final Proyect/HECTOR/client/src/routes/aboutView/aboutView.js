import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js'

var spotifyApi = new SpotifyWebApi();



class AboutView extends Component {
    constructor() {
        super()
    }

    getPlaylist() {
        spotifyApi.getCategories()
            .then(function(data) {
                console.log('Artist information', data);
            }, function(err) {
                console.error(err);
            });
    }

    render() {
        return (
            <article className="about-view">
                About View
                <button onClick={this.getPlaylist}>Wep</button>
            </article>
        );
    }
}

export default AboutView;
