import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { onKeyDown, checkAll } from '../../actions/index.js';

class THead extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleKeyDown(e) {
        const {dispatch} = this.props;
        if(e.keyCode===13){
            dispatch(onKeyDown(e.target.value));
            e.target.value='';
        }
        
    }
    handleChange(e) {
        const {dispatch} = this.props;
        dispatch(checkAll(e.target.checked));
    }

    render() {
        
        const {list} = this.props;
        let check = list.some(alist=> !alist.completed);
        return (<div {...this.props}>
                    <h1><span>todo</span></h1>
                    <input
                           type="text"
                           onKeyDown={ this.handleKeyDown }
                           placeholder="Enter value"
                           style={ {    "width": "470px",    "height": "45px",    "marginBottom": "10px"} } />
                    <div style={ {    "textAlign": "left", "display":(list.length)?"block":"none"  } }>
                        <input
                               type="checkbox"
                                checked={!check}
                               onChange={ this.handleChange }
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

export default connect(mapStateToProps)(THead);
