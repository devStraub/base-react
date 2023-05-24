import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeRightSidebar } from '../../../../redux/reducers/components/overlays/sidebar/right'

// Primefaces
import { Sidebar } from 'primereact/sidebar'

export default function RightSidebar() {

    const visible = useSelector(state => state.rightSidebarView.value)
    const dispatch = useDispatch()

    return (
        <Sidebar visible={visible} position="right" onHide={() => dispatch(closeRightSidebar())}>
            <h2>Sidebar</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Sidebar>
    )
}