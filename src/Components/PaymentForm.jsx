
import React , {useState} from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios"


export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 3000,
                id
            })

            if(response.data.success) {
                console.log("Pago exitoso")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <CardElement className="border"/>
                </div>
            </fieldset>
            <br></br>
            <button className='bg-purple-900 rounded-full p-2 px-4  text-white mr-4'>Pagar</button>
        </form>
        :
       <div>
           <h2>Transacción exitosa</h2>
       </div> 
        }
            
        </>
    )
}