import React from 'react';

class TodoItem extends React.Component {

    constructor(props){
        super(props);
        // this.state = {};
        this.handleDetele = this.handleDetele.bind(this);
    }


    handleDetele(index) {
        this.props.delete(this.props.index);
    }

    render() {
        const {index, content} = this.props;
        return (
            <div onClick={this.handleDetele} key={index}>{content}</div>
        )
    }
}
export default TodoItem;