import { useEffect, useState } from "react";
import ProductList from "../../Components/ProductList/ProductList";
import productsService from "../../Services/product.service";
import { Container } from 'react-bootstrap'


const ProductListPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        productsService
            .getAllProducts()
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))
    }


    return (

        <Container>

            <ProductList products={products} />
        </Container>
    )
}

export default ProductListPage