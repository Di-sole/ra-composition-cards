function Card(props) {
	const { card } = props;

	return (
		<div className="card" style={{width: "18rem"}}>
			{props.children}
			<div className="card-body">
				<h5 className="card-title">{card.title}</h5>
				<p className="card-text">{card.text}</p>
				<a href="#" className="btn btn-primary">{card.btn}</a>
			</div>
		</div>
	)
}

export default Card;
