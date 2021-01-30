import React, {useState} from 'react';
import axiosOrders from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";


const AddQuote = props => {
	const [quote, setQuote] = useState({
		category: '',
		author: '',
		quote: ''
	});
	const [loading, setLoading] = useState(false);

	const quoteDataChanged = e => {
		const {name, value} = e.target

		console.log(e.target.value);

		setQuote(prevState => ({
			...prevState,
				[name]: value
		}));
	}

	const quoteHandler = async e => {
		e.preventDefault();
		setLoading(true);

		const quoteCopy = {...quote}

		try {
			await axiosOrders.post('/quotes.json', quoteCopy)
		} finally {
			setLoading(false);
			props.history.push('/');
		}
	}

	let form = (
		<form onSubmit={quoteHandler}>
			<div className="mb-5">
				<label className="form-label">Category</label>
				<select className="form-select" name="category"
								onChange={quoteDataChanged} defaultValue={quote.category} required
				>
					<option defaultValue>Choose category</option>
					<option value="star-wars">Star Wars</option>
					<option value="famous-people">Famous People</option>
					<option value="saying">Saying</option>
					<option value="humour">Humour</option>
					<option value="motivational">Motivational</option>
				</select>
			</div>
			<div className="mb-5">
				<label className="form-label">Author</label>
				<input type="text" className="form-control"
							 name="author" onChange={quoteDataChanged} required
				/>
			</div>
			<div className="mb-5">
				<label className="form-label">Quote text</label>
				<textarea className="form-control" rows="3"
									name="quote" onChange={quoteDataChanged} required
				/>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	)

	if (loading) {
		form = <Spinner/>
	}

	return (
		<div className="AddQuote mt-5">
			{form}
		</div>
	);
};

export default AddQuote;