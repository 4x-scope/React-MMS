import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '이다산',
    'birthday': '991231',
    'gender': '여',
    'job': '불합자'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '개룸관',
    'birthday': '190216',
    'gender': '남',
    'job': '건축가'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이대칭',
    'birthday': '910119',
    'gender': '여',
    'job': '사기꾼'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id} 
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
