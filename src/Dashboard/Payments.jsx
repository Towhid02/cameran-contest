
import { loadStripe } from "@stripe/stripe-js";


import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../Shared/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <Helmet>
                <title> Cameran | Payment</title>
            </Helmet>
            <SectionTitle heading="Make Payment For Registration" ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;