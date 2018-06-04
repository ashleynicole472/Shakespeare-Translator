import React, { Component } from 'react';
import AUX from './hoc/AUX';
import {
    navbar,
    alert,
    textarea,
    button
    } from './bootstrap.min.css';
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
        <AUX>
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
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <img src={shakeOne} alt="Another quote by shakespeare" />
                        <img src={shakespeare} alt="photo of shakespeare" />
                        <img src={shakeTwo} alt="quote by shakespeare" />
                    </div>
                    <div className="col-sm-12">
                        <h4 className="paragraph">
                            Convert from English to Shakespeare. Shakespeare invented many words and his style of
                            narration in many ways was unique to his time. His ever popular works ( dramas and poems )
                            makes his language style live even today. This translator takes English as input and converts
                            to Shakespeare English.
                        </h4>
                    </div>
                    <div className="col-sm-12">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Enter your words here→</span>
                            </div>
                            <textarea
                                onChange={this.textareaHandleChange}
                                rows="4"
                                cols="50"
                                className="form-control"
                                aria-label="With textarea">
                            </textarea>
                        </div>
                        <br />
                        <button
                            type="button"
                            onClick={this.speak}
                            className="btn btn-primary btn-lg">--Submit--</button>
                    </div>
                    <div className="col-sm-4">
                    </div>
                    <br/>
                    <div className="col-sm-5">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-header">Your Translated Text</div>
                                <div className="card-body">
                                    <h3 className="text-primary">{this.state.shakespeareText}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
            </div>
        </AUX>
    );
  }
}

export default App;
