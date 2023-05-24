import React from 'react'

//Redux
import { useSelector } from 'react-redux'

export default function Pages(){

    const page = useSelector(state => state.pageView.value)

    return(
        <>
            {page}
        </>
    )
}