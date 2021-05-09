import { Fragment, useContext } from 'react';
import { useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartStore';
import service from '../../services/phones-service';
import Basket from '../cart/Basket';
import PhoneItem from './PhoneItem';


const PhoneList = () => {

    const [state, setState] = useState({
        phones: [],
        loading: false
    });

    const { cart, onCartChange } = useContext(CartContext);

   

    useEffect(() => {
        
        async function fetchPhones() {
            setState(state => ({
                ...state,
                loading: true
            }))
            const phones = await service.list()
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

    const onAdd = (product) => {
        const exist = cart.find(item => item.id === product.id);
        if (exist) {
            onCartChange(cart.map(item => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item))
        } else {
            onCartChange([...cart, { ...product, qty: 1 }]);
        }
    }

    const onRemove = (product => {
        const exist = cart.find(item => item.id === product.id);
        if (exist.qty === 1) {
            onCartChange(cart.filter(item => item.id !== product.id));
        } else {
            onCartChange(cart.map(item => item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item))
        }
    })

    const { phones, loading } = state;
    return (
        <Fragment>
            {loading && <div className="d-flex justify-content-center align-items-center"><img src="loading.gif" alt="Loading..." /></div>}
            <div className="row">
                {cart?.length !== 0 &&
                    <div className="col-lg-4 mt-3">
                        <Basket cart={cart}  onAdd={onAdd} onRemove={onRemove} />
                    </div>
                }
                <div className={cart?.length !== 0 ? 'col-lg-8' : 'col-lg-12'}>
                    <div className="row">
                        {phones.map((phone, i) => (
                            <div key={i} className={cart?.length !== 0 ? 'col-lg-6 col-md-6 my-3' : 'col-lg-4 col-md-6 md-6 my-3'}>
                                <PhoneItem phone={phone} onAdd={onAdd} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default PhoneList;
