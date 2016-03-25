import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {

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
                           onChange={ this.handleOnChange }
                           type="checkbox" />
                    <label style={ {    "position": "absolute"} }>
                        Label Text
                    </label>
                    <a
                       href="#"
                       onClick={this.handleOnClick}
                       className="fa fa-trash-o"
                       style={ {    "marginLeft": "300px"} } />
                </li>
            );
    }
}

export default TodoItem;
