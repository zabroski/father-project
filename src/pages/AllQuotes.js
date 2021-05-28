import QuoteList from '../components/quotes/QuoteList';

const  DUMMY_QUOTES = [
    {id: 'q1', author: 'Raye', text: "I am a cute baby!" },
    {id: 'q2', author: 'Grady', text: "Learning from home with dad and Raye!" },

];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )

}
export default AllQuotes;