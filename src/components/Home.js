import React from 'react';
import { Form } from './Form';
import { Header } from './Header';
import { Footer } from './Footer';
import { Premiere } from './Premiere';


export const Home = () => {
    return (
        <div>
            <Header />
            
                <div class="row ">
                    <div class="col form">
                        <Form />
                    </div>
                    <div class="col premiere">
                        <Premiere />
                    </div>
                   
                </div>
         
            <Footer />
        </div>
    )
}
