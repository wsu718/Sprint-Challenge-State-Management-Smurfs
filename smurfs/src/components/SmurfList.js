import React from 'react';
import SmurfCard from './SmurfCard';

import { connect } from 'react-redux';

const SmurfList = props => {
    return (
        <div>
            <div className="smurfList">
                {props.smurfs.map(smurf => (
                    <SmurfCard key={smurf.id} smurf={smurf} />
                ))}
                {/* key={smurf.id} */}
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        length: state.smurfs.length
    }
}

export default connect(mapStateToProps, {})(SmurfList);