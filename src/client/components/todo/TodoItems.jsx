import React, { Component, PropTypes } from 'react';

class TodoItems extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnClick(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    handleOnChange() {
    }

    render() {
        return (<li {...this.props}>
                    <input
                           type="checkbox"
                           onChange="handleOnChange" />
                    <label style={ {    "position": "absolute"} }>
                        Label Text
                    </label>
                    <a
                       onClick={ this.handleOnClick }
                       href="#"
                       className="fa fa-trash-o"
                       style={ {    "marginLeft": "300px"} } />
                </li>
            );
    }
}

export default TodoItems;
