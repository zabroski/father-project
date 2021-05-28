import { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import Comments from '../components/comments/Comments';

const  DUMMY_QUOTES = [
    {id: 'q1', author: 'Raye', text: "I am a cute baby!" },
    {id: 'q2', author: 'Grady', text: "Learning from home with dad and Raye!" },

];

const QuotesDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote) {
        return <p>No Quote found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );

}
export default QuotesDetail;