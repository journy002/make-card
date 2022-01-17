import React, { useState } from 'react'
import styles from './maker.module.css'
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';

function Maker() {

    const [cards, setCards] = useState([
        {
            id: 1,
            name: 'munseok',
            company: 'naver',
            theme: 'dark',
            title: 'frontend engineer',
            email: 'journy002@naver.com',
            message: 'get it',
            fileName: null,
            fileURL: null,
        },
        {
            id: 2,
            name: 'munseok',
            company: 'naver',
            theme: 'dark',
            title: 'frontend engineer',
            email: 'journy002@naver.com',
            message: 'get it',
            fileName: null,
            fileURL: null,
        },
        {
            id: 3,
            name: 'munseok',
            company: 'naver',
            theme: 'dark',
            title: 'frontend engineer',
            email: 'journy002@naver.com',
            message: 'get it',
            fileName: null,
            fileURL: null,
        },
    ])

    return (
        <div className={styles.maker}>
            <Header/>
            <div className={styles.card__container}>
                <Editor />
                <Preview cards={cards} />
            </div>
            <Footer/>
        </div>
    )
}
export default Maker;