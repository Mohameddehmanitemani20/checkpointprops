import logo from './logo.svg';
import './App.css';
import Card from './profile/Card.js';

function App() {

  const list = [
    {
      name: 'name1',
      bio:' bio1',
      img:'img1 '
     
    }
  ]


  return (
    <div className="container">
      <div className="back">
        {list.map((item, index) => {
          return (
            <div className='col-auto mb-3' key={index}>
              <Card item={item}  />
            </div>
          )
        })}
        </div>
    </div>
  );
}

export default App;
