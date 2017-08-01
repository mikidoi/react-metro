import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectStation } from '../actions/index';
import { bindActionCreators } from 'redux';
import {Col, ListGroup, ListGroupItem} from 'react-bootstrap'; 

class StationList extends Component {
    renderList() {
        return this.props.stations.map((station) => {
            return (
                <ListGroupItem
                    onClick={() => this.props.selectStation(station)} 
                    key={station.name}>
                    {station.name}
                </ListGroupItem>
            );
        });
    }
    render() {
        return (
            <Col md={4}>
                <ListGroup>
                    {this.renderList()}
                </ListGroup>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of StationList
    return {
        stations: state.stations
    };
}

// Anything returned from this function will end up as props on the StationList container
function mapDispatchToProps(dispatch) {
    // Whenever selectStation is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectStation: selectStation }, dispatch);
}

// Promote StationList from a component to a container
// - it needs to know about this new dispatch method, selectStation. 
// - Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(StationList);