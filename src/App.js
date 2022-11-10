import React from 'react';

import {Navbar, Header, Footer} from './components';


const App = () =>{
    return(
        <div className='App'>
            <div /* add style className here*/ >
                <Navbar />
                <Header />
            </div>
            <Footer />
        </div>
    )
}

export default App