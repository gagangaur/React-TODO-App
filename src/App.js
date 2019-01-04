import React, { Component } from 'react';
import {Header} from './components/Header';
import {Home} from './components/Home';

class App extends Component {
    state = {
        todos:    [
                {
                    id:1,
                    title: "Meeting with clients",
                    status: false
                },
                {
                    id:2,
                    title: "Meeting with partners",
                    status: false
                },
                {
                    id:3,
                    title: "Going for a movie",
                    status: false
                },
                {
                    id:4,
                    title: "Going to Fair",
                    status: false
                },
                {
                    id:5,
                    title: "Going for jogging",
                    status: false
                }
            ]
        }
        
  render() {
      console.log(this.state.todos);
    return (
        <div>
        <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-4 mb-5"><Header/></div>
        </div>
        <Home todos={this.state.todos}/>
        </div>
    );
  }
}
export default App;
