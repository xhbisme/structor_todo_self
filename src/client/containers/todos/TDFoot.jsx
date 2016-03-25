import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { clearCompleted } from '../../actions/index.js';

class TDFoot extends Component {

    constructor(props, content) {
        super(props, content);
        this.onClearAll = this.onClearAll.bind(this);
    }
    onClearAll() {
        const {dispatch} = this.props;
        dispatch(clearCompleted());
    }

    render() {
        const {list} = this.props;
        let uncheck = list.filter(alist=> !alist.completed).length;
        return (<div
                     {...this.props}
                     style={ {   "display":(list.length)?"block":"none", "background": "#23ee67",    "height": "45px",    "textAlign": "left",    "paddingTop": "10px"} }>
                    <span>{uncheck} item left</span>
                    <a
                       onClick={ this.onClearAll }
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

export default connect(mapStateToProps)(TDFoot);
