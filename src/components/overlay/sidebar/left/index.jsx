import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeLeftSidebar } from '../../../../redux/reducers/components/overlays/sidebar/left'
import { setPage } from '../../../../redux/reducers/components/pages'

// Primefaces
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button';

// Components
import About from '../../../pages/about'
import Projects from '../../../pages/projects'
        
export default function LeftSidebar() {

    const visible = useSelector(state => state.leftSidebarView.value)
    const dispatch = useDispatch()

    return (
        <Sidebar 
            visible={visible} 
            position="left" 
            onHide={() => dispatch(closeLeftSidebar())}>

            <h2>Menu</h2>

            <Button 
                label="About" 
                icon="pi pi-check"
                style={{ width: '100%', marginBlock: '5px'}}
                onClick={() => {
                    dispatch(setPage(<About/>))
                    dispatch(closeLeftSidebar())
                }} />
            <Button 
                label="Projects" 
                icon="pi pi-check"
                style={{ width: '100%', marginBlock: '5px'}}
                onClick={() => {
                    dispatch(setPage(<Projects/>))
                    dispatch(closeLeftSidebar())
                }} />                
        </Sidebar>
    )
}