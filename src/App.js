import './App.css';
import Todo from "./Todo";
import React from "react";
import {Paper, List, Container} from "@material-ui/core";
import AppTodo from "./AppTodo";

class  App extends React.Component {
    constructor(props) {
        super(props);
        // Add, Delete 기능이 있으므로 테스팅용으로 추가했던 데이터 삭제
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json"},
        };

        fetch("http://localhost:8053/todo", requestOptions)
            .then((response) => response.json())
            .then(
                (response) => {
                    this.setState({
                        items: response.data,
                    });
                },
                (error) => {
                    this.setState({
                        error,
                    });
                }
            )
    }

    add = (item) => {
        const thisItems = this.state.items;
        item.id = "ID-" + thisItems.length; // key를 위한 id 추가
        item.done = false;  // done 초기화
        thisItems.push(item); // 리스트에 아이템 추가
        this.setState({ items: thisItems });
        console.log("items : ", this.state.items);
    }

    delete = (item) => {
        const thisItems = this.state.items;
        console.log("Before Update Items : ", this.state.items);
        const newItems = thisItems.filter(e => e.id !== item.id);
        this.setState({items: newItems}, () => {
            console.log("Update Items : ", this.state.items)
        });
    }


    render() {
        var todoItems = this.state.items.length > 0 && (
            <Paper style={{margin: 16}}>
                <List>
                    {this.state.items.map((item, idx) => (
                        <Todo
                            item={item}
                            key={item.id}
                            delete={this.delete}
                        />
                    ))}
                </List>
            </Paper>
        );
        return (
            <div className="App">
                <Container maxWidth="md">
                    <AppTodo add={this.add} />
                    <div className="TodoList">{todoItems}</div>
                </Container>
            </div>
        );
    }
}

export default App;
