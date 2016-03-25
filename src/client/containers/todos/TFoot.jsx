import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { clearAll } from '../../actions/index.js';

class TFoot extends Component {

    constructor(props, content) {
        super(props, content);
        this.handlerClear = this.handlerClear.bind(this);
    }
    handlerClear() {
        const {dispatch} = this.props;
        dispatch(clearAll());
    }

    render() {
        debugger
        const {list} = this.props;
        return (<div
                     {...this.props}
                     style={ {   "display":(list.length)?"block":"none", "background": "#23ee67",    "height": "45px",    "textAlign": "left",    "paddingTop": "10px"} }>
                    <span>0 item left</span>
                    <a
                       onClick={ this.handlerClear }
                       href="#"
                       style={ {    "marginLeft": "300px"} }><span>clear 0 item</span></a>
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

export default connect(mapStateToProps)(TFoot);
