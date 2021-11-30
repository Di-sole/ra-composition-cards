import './App.css';
import Card from './components/Card';

const card1 = {
	title: "Card title",
	text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	btn: "Go somewhere"
}

const card2 = {
	title: "Special title treatment",
	text: "With supporting text below as a natural lead-in to additional content.",
	btn: "Go somewhere" 
}

function App() {
  return (
    <div className="App">
			<Card card={card1}>
				<img src="https://via.placeholder.com/300x200" className="card-img-top" alt="img" />
			</Card>
			<Card card={card2} />
    </div>
  );
}

export default App;
