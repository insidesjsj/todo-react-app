import './App.css';
import Todo from "./Todo";
import React from "react";
import {Paper, List, Container} from "@material-ui/core";
import AppTodo from "./AppTodo";
import {call} from "./service/ApiService";

class  App extends React.Component {
    constructor(props) {
        super(props);
        // Add, Delete 기능이 있으므로 테스팅용으로 추가했던 데이터 삭제
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        call("/todo", "GET", null).then((response) =>
            this.setState({ items: response.data })
        );
    }

    add = (item) => {
        call("/todo", "POST", item).then((response) =>
            this.setState({ items: response.data })
        )
    }

    delete = (item) => {
        call("/todo", "DELETE", item).then((response) =>
            this.setState({items: response.data })
        )
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
