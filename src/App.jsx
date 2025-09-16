
import './App.css'

function App() {

  return (
    <>
      <h1>React core concepts</h1>
        <Student name="Shajid" dept="CSE" id="153-15-6573" sec="L"></Student>
        <Person></Person>
        <Developer name="Alex" tech="Java programer"></Developer>
        <Developer name="Shajid" tech="JS programer"></Developer>
        <Developer name="Jhankar" tech="python programer"></Developer>
        <Device device="samsung-z-fold 5 pro" brand="samsung" price="130000" warenty="2yr"></Device>
        <Pet bird="parot" origin="macaw" cat="partian"></Pet>
    </>
  )
}

function Developer(props){
  console.log(props);

  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Device(props){
  console.log(props)
  return(
    <div style={{
      margin: '10px',
      padding: '5px',
      border: '2px solid salmon',
      borderRadius: '20px',      
    }}>
      <h4>Device name : {props.device} </h4>
      <p>Brand : {props.brand} </p>
      <p>Price : {props.price} </p>
      <p>Warenty : {props.warenty} </p>
    </div>
  )
}

function Person(){
  const age = 17;
  const name = 'Shajid';
  const personStyle = {
    color: 'red',
    textAlign: 'left'
  }
  return (
    <p style={personStyle}>I am a person {age} {name}</p>
  )
}

function Student(props){
  console.log(props)
  return(
    <div style={{
      margin: '10px',
      padding: '5px',
      border: '2px solid salmon',
      borderRadius: '20px', 
    }}>
      <h4>Name: {props.name} </h4>
      <p>Dept: {props.dept}</p>
      <p>Id: {props.id}</p>
      <p>Section: {props.sec}</p>
    </div>
  )

}

function Pet(props){
  console.log(props)
  return(
    // <h3>Favuriate pet</h3>
    <ul style={{
      margin: '10px',
      padding: '5px',
      border: '2px solid salmon',
      borderRadius: '20px', 
      listStyle: 'none'
    }}>
        <li>Bird : {props.bird}</li>
        <li>Origin : {props.origin}</li>
        <li>Cat : {props.pet}</li>
    </ul>
  )
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Football</li>
        <li>Race</li>
      </ul>
      <p>Playing and winning</p>
    </div>
  )
}

export default App
