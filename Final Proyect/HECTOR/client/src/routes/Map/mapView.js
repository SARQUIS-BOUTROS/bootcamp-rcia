import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from "../actionsCreators";

class MapView extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <article >
            </article>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {

    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
