import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm  from "./PaymentForm";


const public_key= "pk_test_51MpcjpEAoa2ZJQttTbCuhMcWOiIJXHx20l1vC876RKT7B5ng2UIyMp4jK6amN94LsrLPfqfwM22ZNZahCDNMPuMZ00XvpfQKVo"
const StripeTestPromise = loadStripe(public_key);



export default function StripeContainer (){

    return(
        <Elements stripe={StripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}