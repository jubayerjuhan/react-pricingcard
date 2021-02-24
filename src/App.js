// import logo from './logo.svg';
import './App.css';

function App() {

  const products = [{name: 'Photoshop', price: '$19.90', description: 'Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting.'},
  {name: 'Premiere Pro', price: '$20.99', description: 'Professional video and film editing.'},
  {name: 'After Effects', price: '$20.99', description: 'Create motion graphics and visual effects for film, TV, video, and web.'}
]
  // console.log(products[0].name)
  return (
    <div className="App">
      <header className="App-header">
          <PriceCard product = {products[0]}></PriceCard>
          <PriceCard product = {products[1]}></PriceCard>
      </header>
    </div>
  );
  
}

const PriceCard = (props) =>{

  const cardStyle = {
    height: '300px',
    width: '300px',
    backgroundColor: 'lightgray',
    color: 'black',
    borderRadius: '5px',
    float: 'left',
    marginTop: '10px',
    padding: '20px',
    fontSize: '18px'
  }

const {name, price, description} = props.product;
console.log(description)

  return (
    <div style = {cardStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <p>{description}</p>
      <button>Buy now</button>
    </div>
  )
}

export default App;
