import React from 'react'

//Redux
import { useSelector } from 'react-redux'

// CSS
import './page.css'

// Components
import Header from '../header'

// Routes
import { RouteList } from '../../routes';
import Overlay from '../overlay';

export default function Pages() {

    const page = useSelector(state => state.pageView.value)
    const navigationMode = useSelector(state => state.ConfigController.navigationMode)

    return (
        <>            
            <header>
                <Header />
            </header>

            <main>
                {navigationMode === 'monopage'
                    ? 
                    page
                    :                      
                    <RouteList />                        
                }
            </main>

            <footer>
                <div className='footer-center'>
                    footer
                </div>
            </footer>

            <Overlay/>
        </>
    )
}