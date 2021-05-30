import { Fragment } from 'react';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const  DUMMY_QUOTES = [
    {id: 'q1', author: 'Raye', text: "I am a cute baby!" },
    {id: 'q2', author: 'Grady', text: "Learning from home with dad and Raye!" },

];

const QuotesDetail = () => {
    const match = useRouteMatch()
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote) {
        return <p>No Quote found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );

}
export default QuotesDetail;