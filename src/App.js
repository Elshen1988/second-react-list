import './App.css';
import Product from './Product';

function App() {
  const product = [
    {
      id: 1,
      countity: 100,
      name: "s1",
      prise: 1000,
      isStock: true
    },
    {
      id: 2,
      countity: 100,
      name: "s2",
      prise: 100,
      isStock: false
    },
    {
      id: 3,
      countity: 100,
      name: "s3",
      prise: 10000,
      isStock: true
    },
    {
      id: 4,
      countity: 100,
      name: "s4",
      prise: 100,
      isStock: true
    }
  ]
  return (

    <div className='App'>
      {
        product.map(user => <Product
          Id={user.id}
          countity={user.countity}
          name={user.name}
          prise={user.prise}
          isStock={user.isStock}
          key={user.id}



        />)}
    </div>
  );
}

export default App;
