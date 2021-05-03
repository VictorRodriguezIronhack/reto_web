import { useEffect, useState } from 'react';
import phonesService from '../../services/phones-service';
import PhoneItem from './PhoneItem';

const PhoneList = () => {

    const [state, setState] = useState({
        phones: [],
        loading: false
    });

    useEffect(() => {
        async function fetchPhones() {
            setState(state => ({
                ...state,
                loading: true
            }))
            const phones = await phonesService.list()
            if (!isUnmounted) {
                setState({
                  phones: phones,
                  loading: false
                })
            }
        }
        let isUnmounted = false;
        fetchPhones()
        return () => {
            isUnmounted = true;
          }
    }, [])

    const { phones } = state;
    return (
        <div className="row">
            {phones.map((phone, i) => (
                <div key={i} className="col-lg-4 col-md-6 my-3">
                    <PhoneItem phone={phone}/>
                </div>
            ))}
        </div>
    )
}

export default PhoneList;
