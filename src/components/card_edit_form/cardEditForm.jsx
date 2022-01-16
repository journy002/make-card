import React from 'react'
import styles from './cardEditForm.module.css'

function CardEditForm({ card, onChange }) {
    const {name, company, theme, title, email, message, fileName} = card

    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name='name' value={name} onChange={onChange} />
            <input className={styles.input} type="text" name='company' value={company} onChange={onChange} />
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" name='title' value={title} onChange={onChange} />
            <input className={styles.input} type="text" name='email' value={email} onChange={onChange} />
            <textarea className={styles.textarea} name="message" value={message} onChange={onChange} />
            <div>
                22
            </div>
            {/* <Button name="Delete"  /> */}
        </form>
    )
}
export default CardEditForm;