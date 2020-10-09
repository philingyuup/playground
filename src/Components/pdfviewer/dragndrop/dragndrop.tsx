import React, { ReactNode } from 'react'
import styles from './dragndrop.module.css'

interface dragndropProps {
    children?: ReactNode;
    setDropItem: Function;
    dropItem: File | null;
}

export const Dragndrop: React.FC<dragndropProps> = ( { children, setDropItem, dropItem } ) => {
    

    const dropHandler = (e: React.DragEvent) => {
        e.preventDefault()
        if (e.dataTransfer.items) {
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
                const file = e.dataTransfer.items[i].getAsFile();
                setDropItem(file)
                console.log(`file: ${file}`)
                console.log(`dropItem: ${dropItem}`)
            }
        } else {
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                console.log(e.dataTransfer.files[i])
            }
        }
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