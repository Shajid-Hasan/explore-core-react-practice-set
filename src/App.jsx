
import './App.css'
import Food from './ToDo';
import ToDo from './ToDo';

function App() {

  const rest = 'need rest';
  const money = '90';
  const time = '1/2 an hour';
  const hotel = 'Singara House'

  return (
    <>
      <h1>React core concepts</h1>

    <Food resturent="Cafee Rio" hungry={true} rest={rest} money={money} time={time} hotel={hotel}></Food>

      {/* <ToDo task="learn react" isDone={true} time={time}></ToDo>
      <ToDo task="Revice JS" isDone={false}></ToDo>
      <ToDo task="take rest" isDone={true} time="100"></ToDo> */}

        {/* <Student name="Shajid" dept="CSE" id="153-15-6573" sec="L"></Student>
        <Person></Person>
        <Developer name="Alex" tech="Java programer"></Developer>
        <Developer name="Shajid" tech="JS programer"></Developer>
        <Developer name="Jhankar" tech="python programer"></Developer>
        <Device device="samsung-z-fold 5 pro" brand="samsung" price="130000" warenty="2yr"></Device>
        <Pet bird="parot" origin="macaw" cat="partian"></Pet>
        <Player name="Tamim" run="100"></Player> */}
    </>
  )
}

// Distructuring Method
function Player({name, run}){
  return(
    <div className='player'>
      <h3>Name : {name}</h3>
      <p>Run : {run}</p>
    </div>
  )
}

// Distructuring Method
function Developer({name, tech}){
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {name}</h3>
      <p>Technology: {tech}</p>
    </div>
  )
}

// Distructuring Method
function Device({device, brand, price, warenty}){
  return(
    <div style={{
      margin: '10px',
      padding: '5px',
      border: '2px solid salmon',
      borderRadius: '20px',      
    }}>
      <h4>Device name : {device} </h4>
      <p>Brand : {brand} </p>
      <p>Price : {price} </p>
      <p>Warenty : {warenty} </p>
    </div>
  )
}

// Props Method
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

// Props Method
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

// Props Method
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
