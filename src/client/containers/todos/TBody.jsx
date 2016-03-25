import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from '../../components/todos/Item.jsx';
import { delALi, checkALi, dblClick, blurLi, chTxt  } from '../../actions/index.js';

class TBody extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnChTxt = this.handleOnChTxt.bind(this);
        this.handleOnDBClick = this.handleOnDBClick.bind(this);
        this.handleBlurLi = this.handleBlurLi.bind(this);
    }
    handleOnClick(item) {//del li
        const {dispatch} = this.props;
        dispatch(delALi(item));
    }
    handleOnChange(item) {//check li
        const {dispatch} = this.props;
        dispatch(checkALi(item));
    }
    handleOnChTxt(item,val){// change the text of the item
        const {dispatch} = this.props;
        dispatch(chTxt(item,val))
    }
    handleOnDBClick(item){// change to edit module
        const {dispatch} = this.props;
        dispatch(dblClick(item));
    }
    handleBlurLi(item){// change to view module
        const {dispatch} = this.props;
        dispatch(blurLi(item));

    }

    render() {
        const {list} = this.props;
        let item = 'undefined';
        let listItem;
        if (list && list.length > 0) {
            listItem = list.map((item, index) => {
                return (<Item
                                  key={ index }
                                  item={ item }
                                  handleOnChange={ this.handleOnChange }
                                  handleOnClick={ this.handleOnClick } 
                                  handlechTxt={this.handleOnChTxt}
                                  handledbClick={this.handleOnDBClick}
                                  handleblurLi={this.handleBlurLi}/>
                    );
            })
        }else{}
        return (<ul
                    {...this.props}
                    style={ {    "listStyle": "none", "textAlign": "left"} }>
                    { listItem }
                </ul>
            );
    }
}
function mapStateToProps(state) {
    const {todoList: {list}} = state;
    return {
        list
    };
}

export default connect(mapStateToProps)(TBody);
