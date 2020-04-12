import React from 'react';
// import logo from './logo.svg';
import './App.css';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
    <div>
        <Card {...testData[0]}/>
        <Card {...testData[1]}/>
        <Card {...testData[2]}/>
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


class App extends React.Component {
    render() {
        return (
            <div>
                <div className='header'>{this.props.title}</div>
                <CardList />
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
