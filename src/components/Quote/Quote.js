import React from 'react';

const Quote = props => {
	return (
		<div className="card mb-5">
			<div className="card-header">
				<div className="button-group text-end">
					<button type="button" className="btn btn-secondary" onClick={props.editQuote}>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff"
								 className="bi bi-pencil-square" viewBox="0 0 16 16">
							<path
								d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
							<path fillRule="evenodd"
										d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
						</svg>
					</button>
					<button type="button" className="btn-close ms-3" onClick={props.deleteQuote}/>
				</div>
			</div>
			<figure className="text-center mt-3 mb-2">
				<blockquote className="blockquote">
					<p>{props.quote}</p>
				</blockquote>
				<figcaption className="blockquote-footer">{props.author}</figcaption>
			</figure>
			<div className="button-group me-2 ms-2 mb-3">
					<button type="button" className="btn btn-primary"
									onClick={props.goTo} style={{color: '#fff'}}
					>Read More</button>
			</div>
		</div>
	);
};

export default Quote;