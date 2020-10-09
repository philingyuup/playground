import React, { ReactNode, useState } from 'react'
import { Dragndrop } from '../dragndrop/dragndrop'

interface wrapperProps {
    children?: ReactNode;
}

export const DropzoneWrapper = (props: wrapperProps) => {
    const [dropItem, setDropItem] = useState<File | null>(null)

    return (
        <>
            <div style={{ 'display': 'flex', 'justifyContent': 'center', 'position': 'relative' }}>
                <Dragndrop setDropItem={setDropItem} dropItem={dropItem}>
                    <p> Drop Here! </p>
                </Dragndrop>  
            </div>
        </>
    )
}