import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// import {Promise as axios} from "q";

// const testData = [
//     {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//     {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//     {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card  key={profile.id}{...profile}/>)}
        {/*<Card {...testData[0]}/>*/}
        {/*<Card {...testData[1]}/>*/}
        {/*<Card {...testData[2]}/>*/}
    </div>

);



class Card extends React.Component {
    render() {
        const profile = this.props;
        return (

            <div className='github-profile'>
                {/*// inline css style ={{ margin: '1rem' }}*/}

                <img src={profile.avatar_url} alt="required" />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component {

    state = { userName: ''};
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({userName: ''})
    };
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <input type="text"
                     value={this.state.userName}
                     onChange={event => this.setState({ userName: event.target.value })}
                     placeholder="Github Username "
                     required
              />
              <button>Add Card</button>
          </form>
        );
    }
}


class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         profiles: testData,
    //     };
    // }
    state = {
      profiles: [],
    };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }))
    };
    render() {
        return (
            <div>
                <div className='header'>{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles} />

            </div>


        )
    }

}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
