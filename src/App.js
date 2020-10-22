import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./App.css";
import { Grid, Button } from "@material-ui/core";
import Popup from "./Component/Popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {
        name: "",
        password: "",
        email: ""
      },
      showPopup: false,
      buttonStaus: true
    };
  }

  changeHandler(e) {
    // console.log(this.state.userdata);
    this.setState({
      userdata: { ...this.state.userdata, [e.target.name]: e.target.value }
    });
    // for (let v in this.state.userdata) {
    //   console.log(v);
    // if () {
    //   this.setState({ buttonStaus: false });
    // } else {
    //   this.setState({ buttonStaus: true });
    // }
  }

  dataHandler() {
    this.setState({ showPopup: true });
  }
  closeHandler() {
    this.setState({ showPopup: false });
  }
  buttonHandler() {}
  render() {
    const { name, email, password } = this.state.userdata;
    return (
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <form noValidate autoComplete="off" className="Form">
              <TextField
                id="outlined-basic"
                label="UserName"
                variant="outlined"
                name="name"
                onChange={e => this.changeHandler(e)}
              />
              <br />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                onChange={e => this.changeHandler(e)}
              />
              <br />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="current-email"
                variant="outlined"
                onChange={e => this.changeHandler(e)}
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={
                  name === "" || email === "" || password === "" ? true : false
                }
                onClick={() => this.dataHandler()}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
        {this.state.showPopup && (
          <Popup
            data={this.state.userdata}
            show={this.state.showPopup}
            close={() => this.closeHandler()}
          />
        )}
      </div>
    );
  }
}

export default App;
