import React from 'react'
import CardEditForm from '../card_edit_form/cardEditForm';
import styles from './editor.module.css'

function Editor({ cards }) {
    return (
        <div className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {
                Object.keys(cards).map(key => (
                    <CardEditForm key={key} card={cards[key]} />
                ))
            }
        </div>
    )
}
export default Editor;