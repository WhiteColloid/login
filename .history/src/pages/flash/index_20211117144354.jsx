import React, { Component } from 'react'
import { connect } from 'react-redux';
import { coonnect } from 'react-redux';
import FlashItem from './FlashItem';

class Flash extends Component {
    render() {
        return (
            <div>
              <FlashItem/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        flashData: state.flash
    }
}

export default connect(mapStateToProps, null)(Flash);