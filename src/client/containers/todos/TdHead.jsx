import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { keyDown, checkAll } from '../../actions/index.js';

class TdHead extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleKeyDown() {
        const {dispatch} = this.props;
        dispatch(keyDown());
    }
    handleChange() {
        const {dispatch} = this.props;
        dispatch(checkAll());
    }

    render() {
        const {list} = this.props;
        
        return (<div {...this.props}>
                    <h1><span>todo</span></h1>
                    <input
                           type="text"
                           onKeyDown={ this.handleKeyDown }
                           placeholder="Enter value"
                           style={ {    "width": "470px",    "height": "45px",    "marginBottom": "10px"} } />
                    <div style={ {    "textAlign": "left"} }>
                        <input
                               onChange={ this.handleChange }
                              
                               type="checkbox"
                               style={ {    "marginLeft": "20px"} } />
                        <label>
                            mark all
                        </label>
                    </div>
                </div>
            );
    }
}
function mapStateToProps(state) {
    const {todoList: {list}} = state;
    return {
        list
    };
}

export default connect(mapStateToProps)(TdHead);
