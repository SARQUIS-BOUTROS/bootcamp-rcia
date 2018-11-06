import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { setList } from "../../actionsCreators";
import '../shared/styles/card.css';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom'

const spotifyApi = new SpotifyWebApi();


class ArtistListView extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        document.title = "Spoty | Resultados ";
        this.getResults = this.getResults.bind(this)
    }

    /*
    Detect change in url and trigger new search with getResults().
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.search !== this.props.match.params.search){
            this.getResults()
        }

    }

     componentDidMount(){
        this.getResults()
    }

    /*
    Artist's Name is in URL. The component must take from there
     */
    getResults() {
        spotifyApi
            .searchArtists(decodeURI(this.props.match.params.search))
            .then(data => this.props.setList(data.artists.items))
            .catch(console.log('error'));
    }


    render() {
        return (
            <article>
                <section className={'cards-content'}>
                    {this.props.list.map( artist =>
                        <div className='card' key={artist.id}>
                            <Link to={'/artist-albums/'+ artist.id}> <img className={'img'} src={artist.url}/></Link>
                            <div className='description'>
                                <div className={'artist'}>{artist.name}</div>
                                <div className={'gene'}>{ artist.gene }</div>
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
/*
https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
 */
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArtistListView));
