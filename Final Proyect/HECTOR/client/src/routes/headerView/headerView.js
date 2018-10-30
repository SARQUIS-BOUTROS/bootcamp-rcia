import {Component} from "react";
import logo from "../../assets/logo.png";
import React from "react";
import { setUserName , setList } from "../../actionsCreators";
import  './headerView.css';
import { connect } from 'react-redux';
import SpotifyWebApi from "spotify-web-api-js"

const spotifyApi = new SpotifyWebApi();

class HeaderView extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            search: false,
        }
        spotifyApi.getMe().then(data =>
            this.props.setUserName( data.display_name )
        )
            .catch(console.log('Login!'));
    }

    componentDidMount() {
    }

    handleInputChange = () => {

        this.setState({
            query: this.search.value
        })
        if (1 < (this.state.query).length) {
            this.setState({search:true})
            spotifyApi.searchArtists(this.search.value).then(data =>
                this.props.setList(data.artists.items)
            ).catch(console.log('error'));
        } else {
            this.setState({search:false})
        }
    }
    getResult () {

    }
    render() {
        return (
            <header className="main-view__header">
                <img src={logo} className="main-view__logo" alt="logo" />
                <p className="name">  Hola { this.props.user_name } </p>
                <form>
                    <p className="result">Resultados para {this.state.query}</p>
                    <button onClick={this.getResult}>Search</button>
                    <input
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                </form>
            </header>
        );
    }
}

function mapStateToProps(state) {
    //console.log('state: ' , state)
    return {user_name: state.user_name,
    list:state.list}
}
function mapDispatchToProps(dispatch) {

    return {
        setUserName: (name) => dispatch(setUserName(name)),
        setList: (list) => dispatch(setList(list))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);
