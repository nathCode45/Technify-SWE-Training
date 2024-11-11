import React from 'react' // no longer required

const Header = (props) => {
  return (
    <header>
        <h1 style={{color: 'red', backgroundColor: 'black'}}>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = { //sets a default for anything not passed in
  title: 'Task Tracker'
}

export default Header

//This is how you do it with classes but not used as much as methods anymore
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }



