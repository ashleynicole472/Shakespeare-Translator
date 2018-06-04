import React, { Component } from 'react';
import { navbar} from './bootstrap.min.css';
import shakespeare from './images/shakespeare.jpg';
import shakeOne from './images/shake-quote.png';
import shakeTwo from './images/quote-shake.png';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            userText: '',
            shakespeareText: ''
        }
        this.textareaHandleChange = this.textareaHandleChange.bind(this);
    }

    textareaHandleChange = (event) => {
        // console.log("in text area");
        this.setState({
            userText: event.target.value
        })
        // console.log(this.state.userText);
    }

    speak = () => {
        let { userText } = this.state
        let URL = `https://shakespeare.p.mashape.com/shakespeare.json?text=${userText}`;

        var newHeaders = new Headers({
            "X-Mashape-Key": "Ma9KTYWObTmshpd7HvSsw6hea2dCp1DteDujsnmVQG8WQBwPo0"
        });

        let config = {
            method: 'GET',
            headers: newHeaders
        }

        fetch(URL,config)
        .then((response) => {
            return(
                response.json()
            )
        })
        .then((data) => {
            console.log(data);
            this.setState({
                shakespeareText: data.contents.translated
            })
        })
        .catch((error) => {
            console.log(error);
            console.log("Someting wong");
        })
    }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Speak Shakespeare</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                </li>
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
              </ul>
            </div>
        </nav>
        <br />
        <div className="alert alert-dismissible alert-success">
          <button type="button" className="close" data-dismiss="alert" aria-label="close">&times;</button>
          <strong>Welcome!</strong> To get started, please enter any sentence or large chunk of modern English and we will translate it to Shakespeare.
        </div>
        <div className="col-md-12">
            <img src={shakeOne} alt="photo of shakespeare" />
            <img src={shakespeare} alt="photo of shakespeare" />
            <img src={shakeTwo} alt="photo of shakespeare" />
        </div>
        <p>
            Convert from English to Shakespeare. Shakespeare invented many words and his style of
            narration in many ways was unique to his time. His ever popular works ( dramas and poems )
            makes his language style live even today. This translator takes English as input and converts
            to Shakespeare English.
        </p>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Enter your words here→</span>
          </div>
          <textarea
            onChange={this.textareaHandleChange}
            rows="4"
            cols="50"
            className="form-control"
            aria-label="With textarea"></textarea>
        </div>
        <button
            type="button"
            onClick={this.speak}
            className="btn btn-primary btn-lg">Block level button</button>
            <br />
        <div className="well">
            <h3 className="text-primary">{this.state.shakespeareText}</h3>
        </div>
      </div>
    );
  }
}

export default App;
