import React from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { showRightSidebar } from '../../redux/reducers/components/overlays/sidebar/right'
import { showLeftSidebar } from '../../redux/reducers/components/overlays/sidebar/left';

// Primefaces
import { Button } from 'primereact/button';

export default function Header() {

    const dispatch = useDispatch()

    return (
        <>
            <div className='header-left'>
                <Button icon="pi pi-arrow-right" onClick={() => dispatch(showLeftSidebar())} />
            </div>

            <div className='header-center'>
                LOGO
            </div>

            <div className='header-right'>
                <Button icon="pi pi-arrow-left" onClick={() => dispatch(showRightSidebar())} />
            </div>
        </>
    )
}