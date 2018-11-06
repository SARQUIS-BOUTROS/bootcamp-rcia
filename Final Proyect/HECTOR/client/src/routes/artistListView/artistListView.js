import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { setList } from "../../actionsCreators";
import './artistListView.css';
import { connect } from 'react-redux';
import {Link, Redirect, withRouter} from 'react-router-dom'

const spotifyApi = new SpotifyWebApi();


class ArtistListView extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.getResults = this.getResults.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.search !== this.props.match.params.search){
            this.getResults()
        }

    }
    componentDidMount(){
        this.getResults()
    }

    getResults() {
        spotifyApi
            .searchArtists(decodeURI(this.props.match.params.search))
            .then(data => this.props.setList(data.artists.items))
            .catch(console.log('error'));
    }


    render() {
        return (
            <article className="artist-list-view">
                Artist List
                <section>
                    {this.props.list.map( artist =>
                        <div className='card' key={artist.id}>
                            <Link to={'/artist-albums/'+ artist.id}> <img className={'img'} src={artist.url}/></Link>
                            <div className='description'>
                                <div className={'artist'}>{artist.name}</div>
                            </div>
                        </div>
                        )
                    }
                </section>
            </article>
        );
    }
};

function mapStateToProps(state) {
    return {list: state.list}
}

function mapDispatchToProps(dispatch) {
    return {
        setList: (list) => dispatch(setList(list)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArtistListView));
