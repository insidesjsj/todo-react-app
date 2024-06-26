import React from "react";
import {Button, Grid, Paper, TextField} from "@material-ui/core";

class AppTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: ""} }; // 사용자의 입력을 저장할 오브젝트
        this.add = props.add;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    onButtonClick = (e) => {
        this.add(this.state.item);
        this.setState({ item: { title: ""} });
    }


    enterKeyEventHandler = (e) => {
        if(e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        <TextField
                            placeholder="Add Todo here"
                            fullWidth
                            onChange={this.onInputChange}
                            onKeyDown={this.enterKeyEventHandler}
                            value={this.state.item.title}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button
                            fullWidth color="secondary"
                            variant="outlined"
                            onClick={this.onButtonClick}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AppTodo;