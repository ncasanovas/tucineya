import React from 'react';
import { Form } from './Form';
import { Header } from './Header';
import { Footer } from './Footer';
import { Premiere } from './Premiere';


export const Home = () => {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Form />
                    </div>
                    <div class="col">
                        <Premiere />
                    </div>
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}
