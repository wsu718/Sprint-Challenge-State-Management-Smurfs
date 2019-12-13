import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { addSmurf, getSmurfs, deleteSmurf } from '../actions/smurfActions';
import Loader from 'react-loader-spinner';

const SmurfForm = props => {

    useEffect(() => {
        props.getSmurfs();
    }, [])

    const [addSmurfName, setAddSmurfName] = useState('');
    const [addSmurfAge, setAddSmurfAge] = useState('');
    const [addSmurfHeight, setAddSmurfHeight] = useState('');
    const [deleteSmurfId, setDeleteSmurfId] = useState('');

    const handleChanges = e => {
        switch (e.target.name) {
            case 'name':
                return setAddSmurfName(e.target.value);
            // return console.log(e.target.value)
            case 'age':
                return setAddSmurfAge(+e.target.value);
            case 'height':
                return setAddSmurfHeight(e.target.value);
            case 'id':
                return setDeleteSmurfId(+e.target.value);
            default:
                return null
        }
    }

    return (
        <div>
            <div>
                {props.isFetching && (
                    <Loader type="Puff" color="#00BFFF" height={400} width={400} />
                )}
                {props.isPosting && (
                    <Loader type="Puff" color="#00BFFF" height={400} width={400} />
                )}
                {props.error &&
                    alert(`ERROR!!!!!!      ${props.error}`)
                }
            </div>

            <div>
                <h2>Show me the Smurfs!</h2>
                <button
                    onClick={() => props.getSmurfs()}
                >Refresh Smurfs</button>
            </div>

            <div className="container">
                <div className="addSmurf">
                    <h2>Add Smurf</h2>

                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Smurf Name"
                        onChange={handleChanges}
                    // value={addSmurfName}
                    />

                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        onChange={handleChanges}
                    // value={addSmurfName}
                    />

                    <label>Height:</label>
                    <input
                        type="text"
                        name="height"
                        placeholder="Height"
                        onChange={handleChanges}
                    // value={addSmurfName}
                    />

                    <button
                        onClick={() => props.addSmurf(
                            {
                                "name": addSmurfName,
                                "age": addSmurfAge,
                                "height": addSmurfHeight,
                            }

                        )}
                    >Add Smurf</button>
                </div>

                <div className="deleteSmurf">
                    <h2>Delete Smurf</h2>

                    <label>ID:</label>
                    <input
                        type="text"
                        name="id"
                        placeholder="Smurf ID"
                        onChange={handleChanges}
                    // value={addSmurfName}
                    />

                    <button
                        onClick={() => props.deleteSmurf(deleteSmurfId)}
                    >Delete Smurf</button>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        addSmurf: state.addSmurf,
        getSmurfs: state.getSmurfs,
        deleteSmurf: state.deleteSmurf,
        isFetching: state.isFetching,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, { deleteSmurf, addSmurf, getSmurfs })(SmurfForm);