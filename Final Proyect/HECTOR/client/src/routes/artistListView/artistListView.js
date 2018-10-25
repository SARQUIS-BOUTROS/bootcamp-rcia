import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js'

var spotifyApi = new SpotifyWebApi();


class ArtistListView extends Component {
    constructor() {
        super()
        const params = this.getHashParams()
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
        }
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

    getArtist() {
        spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
            .then(function(data) {
                console.log('Artist information', data);
            }, function(err) {
                console.error(err);
            });
    }


    render() {
        return (
            <article className="artist-list-view">
                Artist List
                <button onClick={this.getArtist}>Artist</button>
            </article>
        );
    }
}

export default ArtistListView;
