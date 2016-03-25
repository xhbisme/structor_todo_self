import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { clear } from '../../actions/index.js';

class TFoots extends Component {

    constructor(props, content) {
        super(props, content);
        this.clearAll = this.clearAll.bind(this);
    }
    clearAll() {
        const {dispatch} = this.props;
        dispatch(clear());
    }

    render() {
        debugger
        const {list} = this.props;
        let uncheck = list.filter(alist=> !alist.completed).length;
        return (<div
                     {...this.props}
                     style={ {  "display":(list.length)?"block":"none",  "background": "#23ee67",    "height": "45px",    "textAlign": "left",    "paddingTop": "10px"} }>
                    <span>{uncheck} item left</span>
                    <a
                       onClick={ this.clearAll }
                       href="#"
                       style={ {    "marginLeft": "300px"} }><span>clear {list.length-uncheck} item</span></a>
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

export default connect(mapStateToProps)(TFoots);
