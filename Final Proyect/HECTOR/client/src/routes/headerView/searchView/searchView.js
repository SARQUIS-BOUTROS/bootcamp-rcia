import {Component} from "react";
import React from "react";
import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
import './searchView.css'

class SearchView extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            nextURL:'/artist-list/'
        };
        document.title = "Spoty | Búsqueda";
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    /*
    Handle textbox from searchs.
     */
    handleInputChange() {
        /*
        https://stackoverflow.com/questions/53127727/axios-api-search-function-is-returning-everything
         */
        this.setState({ query: this.search.value });
        /*
        Redirect to /artist-list/:artist.
         */
        this.props.history.push(encodeURI(this.state.nextURL+''+this.state.query));
    }

    render() {
        return (
                <form>
                    <h6 className="result">Resultados para {this.state.query}</h6>
                    <nav>
                        <i className="material-icons">search</i>
                        <input
                            placeholder="Search for..."
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                    </nav>
                </form>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(SearchView));