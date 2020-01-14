import React, { Component } from 'react';

class Form extends Component {
    render = () => {
        return (
            <div>
                <form id="form">
                    <div >
                        <label>N:</label>
                        <br/>
                        <input type="text"  name="n" value="10" aria-describedby="nHelp" />
                        <br/>
                        <small id="nHelp" >Number of top occuring words required. It needs to be an integer.</small>
                    </div>
                    <button type="submit" >Submit</button>
                </form>

            </div>
        )
    }
}

export default Form;
