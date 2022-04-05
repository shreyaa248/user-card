import Users_card from "./Components/users";
import './App.css';

import React, {Component} from 'react' 

class App extends Component {
  constructor(props){
    super(props)

    this.state={users_data :[],
                loading : false
    }
    this.updateState = this.updateState.bind(this)
  }
  updateState(){
    this.setState({loading: !this.loading})
    const timer = setTimeout(() => {
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
    .then(response => response.json())
    .then((users) => {

      this.setState({ users_data:users.data, 
                      loading: false 

      })
      console.log(users.data);
    }
    )
    .catch((error) => {
      console.error(error)
    }
    )
    },5000)
    return() => clearTimeout(timer);
  }
  render(){
    return(<>
     <nav>
      <div className="box">
        <div className="row">
        <div className="column1">
        <h2>LGM Users</h2>
        </div>
        <div className= "column2">
        <button onClick={this.updateState}>Get Users </button>  
        </div>
        </div>
      </div>
     </nav>
     <div className="box2">
       <Users_card loading = {this.state.loading} users = {this.state.users_data}/> 
       </div>
    </>
    )

  }
}
export default App;
