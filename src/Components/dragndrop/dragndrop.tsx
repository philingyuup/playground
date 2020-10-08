import React, { ReactNode, useState } from 'react'
import styles from './dragndrop.module.css'

interface Props {
    children?: ReactNode;
}

export const Dragndrop: React.FC<Props> = ( { children } ) => {
    const [ dropItem, setDropItem ] = useState<File | null>(null)

    const dropHandler = (e: React.DragEvent) => {
        e.preventDefault()
        if (e.dataTransfer.items) {
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
                const file = e.dataTransfer.items[i].getAsFile();
                setDropItem(file)
                console.log('dropItem: ' + dropItem)
                console.log(`file: ${file}`)
            }
        } else {
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                console.log(e.dataTransfer.files[i])
            }
        }
        console.log('dropItem: ' + dropItem)
    }

    const onDragOverHandler = (e: React.DragEvent) => {
        e.preventDefault()
    }

    return (
        <>
            <div className={styles.dropzone} onDrop={dropHandler} onDragOver={onDragOverHandler}> 
                { children }
            </div>
        </>
    )
}