import React, { useEffect , useState } from 'react';
import axios from 'axios';
import './ViewBooking.css';
import Header from '../Header';

const orderurl = 'https://tatacliqapi.onrender.com/orders';
const updateurl = 'https://tatacliqapi.onrender.com/updateOrder';

const ViewBooking = (props) => {
    const [order,setOrder] = useState([]);

    useEffect(()=>{
        // if(props.location){

            let query = props.location.search;
            let status = query.split('&')[0].split('=')[1];
            let orderId = query.split('&')[1].split('=')[1];
            let date = query.split('&')[2].split('=')[1];
            let bank = query.split('&')[3].split('=')[1];
            
            if(query){
                let data ={
                    "status":status,
                    "bank_name":bank,
                    "date":date,
                }
                let id = orderId;
                axios.patch(`${updateurl}/${id}`,JSON.stringify(data))
                .then((res)=>console.log(res))
                // fetch(`${updateurl}/${id}`,{
                //     method:'PATCH',
                //     headers:{
                //         'Accept':'application/json',
                //         'Content-Type':'application/json'
                //     },
                //     body: JSON.stringify(data)
                // })
                
            }
        // }
            axios.get(orderurl)
            .then((res)=>{setOrder(res.data)})
        


    },[])


    const renderTable = (orderdata) =>{
        if(orderdata){
           return (orderdata.map((item)=>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>

                    {item.products.map((elem)=>{
                        return(elem.product_name)
                    })
                    }
                    </td>
                    
                    <td>{item.date}</td>
                    <td>{item.Status}</td>
                    <td>{item.Bank}</td>
                    <td>₹{item.cost}</td>
                </tr>
            )
           })
           )
        }
    }
    return(<>
            <Header/>
            <div className='bookings'>
                <div className='booking-heading'>My Orders</div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Products</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Bank</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(order)}
                    </tbody>
                </table>
                <button className='home-btn' onClick={()=>props.history.push('/')}>Continue shopping</button>
            </div>
        </>);
}
export default ViewBooking