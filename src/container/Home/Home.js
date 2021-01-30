import React, {useState, useEffect} from 'react';
import axiosOrders from "../../axios-orders";
import Quote from "../../components/Quote/Quote";
import CATEGORIES from "../../categories";

const Home = props => {
	const [quotes, setQuotes] = useState({});

	const deleteQuote = () => {
		return;
	}
	const editQuote = () => {
		return;
	}
	const goToPage = () => {
		return;
	}

	const fetchData = async (url) => {
		try {
			const response = await axiosOrders.get(url);
			setQuotes(response.data);

		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		fetchData('/quotes.json').catch(console.error);
	}, []);

	let quotesList = (Object.values(quotes).map((item, index) => {
		return (
			<Quote key={index} quote={item.quote}
						 author={item.author} editQuote={editQuote}
						 deleteQuote={deleteQuote} goTo={goToPage}
			/>
		)
	}))

	const categoryChanged = async e => {
		const id = e.target.id;
		const url = '/quotes.json?orderBy="category"&equalTo=';

		if (id === 'all') {
			const response = await axiosOrders.get('/quotes.json');
			setQuotes(response.data);
			Object.values(quotes).map((item, index) => {
				return (
					quotesList = (
						<Quote key={index} quote={item.quote}
									 author={item.author} editQuote={editQuote}
									 deleteQuote={deleteQuote} goTo={goToPage}
						/>
					)
				)
			})
		}
		if (id) {
			const response = await axiosOrders.get(url + `\"${id}\"`);
			setQuotes(response.data);
			Object.values(quotes).map((item, index) => {
				return (
					quotesList = (
						<Quote key={index} quote={item.quote}
									 author={item.author} editQuote={editQuote}
									 deleteQuote={deleteQuote} goTo={goToPage}
						/>
						)
				)
			})
		}
	}


	return (
		<div className="row mt-5 justify-content-between" >
			<aside className="col-4">
				<div className="list-group">
					{CATEGORIES.map((el, index)=> (
						<button key={index} id={el.id}
										className="list-group-item list-group-item-action"
										onClick={categoryChanged}
						>
							{el.title}
						</button>
					))}
				</div>
			</aside>
			<main className="col-8">
				{quotesList}
			</main>
		</div>
	);
};

export default Home;