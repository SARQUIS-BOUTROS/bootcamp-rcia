import {Component} from "react";
import React from "react";
import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
import {seek} from "../../../actionsCreators";
import './searchView.css'

class SearchView extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            nextURL:'/artist-list/'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange() {

        this.setState({ query: this.search.value });
        console.log(this.state.nextURL + this.state.query);
        this.props.history.push(encodeURI(this.state.nextURL+''+this.state.query));
    }

    render() {
        return (
                <form>
                    <h6 className="result">Resultados para {this.state.query}</h6>
                    <section>
                        <i className="material-icons">search</i>
                        <input
                            placeholder="Search for..."
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                    </section>
                </form>
        );
    }
}

function mapStateToProps(state) {
    return {list: state.list}
}

function mapDispatchToProps(dispatch) {
    return {
        seek: (list) => dispatch(seek(list))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(SearchView));