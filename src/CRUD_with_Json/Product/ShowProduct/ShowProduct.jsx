import axios from 'axios'
import React, {useState,useEffect} from 'react'
import ModalUpdate from '../../Modal_Update/Modal_Update';
import ProductCard from '../ProductCard/ProductCard'

export default function ShowProduct(props) {
    const [products,setProducts] = useState();
    const [flag, setFlag] = useState(true);
    const [updateId, setUpdateId] = useState();
    const [modalShow, setModalShow] = useState(false);
    const updateHandler = (id)=>{
        setUpdateId(id);
        setModalShow(!modalShow);
    };
    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(response => {setFlag(true);
            console.log(response.data);
            setProducts(response.data)});
        console.log(`useEffeft`);
    },[flag]);
    const reRender = (f)=>{setFlag(f)};
    return (
        <div className=' productCard d-flex flex-row flex-wrap p-4 m-5 align-items-around'>
            {
                products != null ?
                        products.map((item) =>
                        <ProductCard id={item.id} name={item.name} 
                        price={item.price} reRender={reRender} product={item} updateHandler={updateHandler}/>
                ): null
            }
            <ModalUpdate show={modalShow} onHide={() => setModalShow(false)} updateId={updateId} reRender={reRender}/>
        </div>
    )
}
