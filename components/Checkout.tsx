import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


type FormData = {
    name: string;
    email: string;
    paymentDetails: string;
};

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    paymentDetails: yup.string().required('Payment details are required'),
});

const Checkout: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        
    });

    const onSubmit = (data: FormData) => {
        console.log('Checkout data', data);
        alert('Booking completed!');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '16px' }}>
                <label>Name</label>
                <input {...register('name')} />
                <p>{errors.name?.message}</p>
            </div>
            <div style={{ marginBottom: '16px' }}>
                <label>Email</label>
                <input {...register('email')} />
                <p>{errors.email?.message}</p>
            </div>
            <div style={{ marginBottom: '16px' }}>
                <label>Payment Details</label>
                <input {...register('paymentDetails')} />
                <p>{errors.paymentDetails?.message}</p>
            </div>
            <button type="submit">Complete Booking</button>
        </form>
    );
};

export default Checkout;
