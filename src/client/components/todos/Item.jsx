import React, { Component, PropTypes } from 'react';

class Item extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.changeText = this.changeText.bind(this);
        this.chToEditModule = this.chToEditModule.bind(this);
        this.chToViewModule = this.chToViewModule.bind(this);
    }
    handleOnClick() {// del a li
      let {item} = this.props;
      this.props.handleOnClick(item)
    }
    handleOnChange(e) { // change check status
      let {item}= this.props;
      this.props.handleOnChange(item);
    }
    changeText(e){// edit module input the text
      let {item}= this.props;
      this.props.handlechTxt(item,e.target.value);
    }
    chToEditModule(){// doubleClicked the div to the edit module
      let {item}= this.props;
      this.props.handledbClick(item);
    }
    chToViewModule(){// blur input to the view module
      let {item}= this.props;
      this.props.handleblurLi(item);
    }

    render() {
      
      const {item} = this.props;
      const {text,completed,edit}= item;
      let textElement = null;

        if (completed === true) {
            textElement = (<label style={ {    "position": "absolute", "textDecoration":"line-through","color":"#aaa"} }>
                               {text}
                           </label>
            );
        } else {
            textElement = (<label style={ {    "position": "absolute"} }>
                               {text}
                           </label>
            );
        }

        return (<li {...this.props}>
                  <div 
                  onDoubleClick={this.chToEditModule}
                  style={{"display":(edit)?'none':'block'}}>
                    <input
                           type="checkbox"
                           checked={completed}
                           onChange={ this.handleOnChange } />
                    {textElement}
                    <a
                       href="#"
                       className="fa fa-trash-o"
                       onClick={ this.handleOnClick }
                       style={ {    "marginLeft": "300px"} } />
                  </div>
                    <input type='text' 
                    onBlur={this.chToViewModule}
                    value={text} 
                    style={{"display":(edit)?'block':'none'}}
                    onChange={this.changeText}/>

                </li>
            );
    }
}

export default Item;
