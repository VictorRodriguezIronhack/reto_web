import PhoneDetail from '../components/phones/PhoneDetail';

function Phones({ history, match, query }) {

    const phoneId = match.params.id;
    
    return (
        <div><PhoneDetail id={phoneId} /></div>
    );
}

export default Phones;