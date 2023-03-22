import logo from './logo.svg';
import './App.css';

const name = 'Mahfuzur Rahman';
const number = 5239;
const reactStyle = {
  color: 'white',
  backgroundColor: 'darkgreen',
  padding: '25px',
}
const singers = [
  { name: 'Mahfuz', job: 'Danger' },
  { name: 'Eva', job: 'Singer' },
  { name: 'Agun', job: 'sopno' },
  { name: 'Imran', job: 'Anace' },
]

function App() {
  const nayoks = ['Josim', 'Alomgir', 'RazRazzak', 'Riaz'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name="Salman" nayika="Maliya"></Person>
      <Person name="Hero Alom" nayika="Heroine"></Person>
      <Person nayika="Mousomi"></Person>
      <Person name={nayoks[0]}></Person>
      <Person name={nayoks[2]}></Person> */}
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      {/* <p>Nayika: {props.nayika}</p>
      <p style={reactStyle}>Profession: Framework</p> */}
    </div>
  );
}

function Friend() {
  return (
    <div>
      <h3>Md Rakib Mozumder</h3>
      <p>Fulltime Tiktoker. ID-{number}</p>
    </div>
  );
}

export default App;
