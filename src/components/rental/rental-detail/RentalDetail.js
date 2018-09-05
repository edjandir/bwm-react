import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class RentalDetail extends React.Component {

    componentWillMount() {
        //Dispatch action
        const rentalId = this.props.match.params.id;
        this.props.dispatch(actions.fetchRentalById(rentalId));
    }

    render() {
        const rental = this.props.rental;
        if (rental.id) {
            return (
                <div>
                    <h1>{rental.title}</h1>
                    <h2>{rental.city}</h2>
                    <h2>{rental.description}</h2>
                    <h2>{rental.dailyRate}$</h2>
                </div>

            )
        }
        else {
            return <h1>Loading...</h1>
        }
    }
}

function mapStateToProps(state) {
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail);