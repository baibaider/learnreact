import React from 'react';
import TodoItem from './TodoItem';


class Todulist extends React.Component {
    constructor(props){  //构造函数，组价被创建执行
        super(props);
        this.state = {
            list : [],
            inputContent : '',
        }
        //在构造函数里bind会提升性能，来自底层

    }

    handleBtnClick() {
        //这里面如果直接写this不在函数中传递，那this指向的是button按钮了
        //在函数中传递了之后，直接用this，就是组件的this了

        this.setState({
            list : [...this.state.list, this.state.inputContent], //...this.state.list就是之前的arguments
            inputContent : '',
        })
    }

    inputChangeContent(e) {
        this.setState({
            inputContent : e.target.value,
        })
    }

    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list : list,
        })
    }

    getTodoList() {
        return (

                this.state.list.map((item, index) =>{
                return <TodoItem delete={this.handleDelete.bind(this)} content={item} index={index} key={index}/>
                {/*<li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>*/}
            })

        )
    }

    render() {  //负责页面显示的部分
        return (
            <React.Fragment>
                <div>
                    <input value={this.state.inputContent} onChange={this.inputChangeContent.bind(this)}/>
                    <button onClick={this.handleBtnClick.bind(this)}>add</button>
                </div>
                <ul>{this.getTodoList()}</ul>
            </React.Fragment>

        );
    }


}

export default Todulist;
