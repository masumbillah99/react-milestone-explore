import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
  const products = [
    { name: 'Desktop', price: 79000 },
    { name: 'Laptop', price: 49000 },
    { name: 'Tablet', price: 29000 },
    { name: 'Phone', price: 17000 },
    { name: 'Watch', price: 3000 },
  ];
  return (
    <div className="App">
      {/* {
        nayoks.map(nayok => <li>{nayok}</li>)
      } */}

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {/* {
        singers.map(singer => <Person name={singer.name}></Person>)
      } */}

      {/* <Person name="Salman" nayika="Maliya"></Person>
      <Person name="Hero Alom" nayika="Heroine"></Person>
      <Person nayika="Mousomi"></Person>
      <Person name={nayoks[0]}></Person>
      <Person name={nayoks[2]}></Person> */}

      {/* <Friend></Friend> */}

      {/* <Product name="Laptop"></Product>
      <Product name="Phone" price="4300"></Product>
      <Product name="Watch"></Product> */}

      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}

      {/* <Counter></Counter> */}

      {/** -------------- */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

// External data লোড করতে হলে ৫টি কাজ করতে হবে। এগুলো হলোঃ
// 1. useState(): declare state
// 2. useEffect(): 2 parameter- (1)anonymous function (2)Empty Array
// 3. Data load: fetch, res, json, data
// 4. connect with State
// 5. show data using map(): you can make extra component for showing data.

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect(() => { }, []);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px' }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
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

// React Core concepts 2
function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <h5>Price: </h5>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(19);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
