import React from 'react';

const ThemeContext = React.createContext('Goran');

class Main extends React.Component{
  state = {
    username: 'Goran'
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  }

  render(){
    return(
      <ThemeContext.Provider 
        value={ { username: this.state.username, loggedIn: true } }>
        <div>
          <input type="text" onChange={this.handleChange} value={this.state.username}/>
          <Header/>
        </div>
      </ThemeContext.Provider>
    )
  }
}

function Header(){
  return(
    <header>
      <Nav />
    </header>
  )
}

function Nav(){
  return(
    <nav>
      <a href="#about">about</a>
      <a href="#contact">contact</a>
      <a href="#socialmedia">Social Media</a>
      <Profile />
    </nav>
  )
}

function Profile(){
  return (
    <ThemeContext.Consumer>
      { renderUsername }
    </ThemeContext.Consumer>
  )
}

function renderUsername(data){
  return <p> {data.username} - {data.loggedIn} </p>;
}

export default Main;