import React, { Component } from 'react';
import { connect } from 'react-redux';

class StationDetail extends Component {
    render() {
        if (!this.props.station) {
            return <div>Select a book to get started.</div>;
        }
        
        return (
            <div>
                <h3>{this.props.station.name}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        station: state.activeStation
    };
}

export default connect(mapStateToProps)(StationDetail);