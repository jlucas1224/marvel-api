import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import './index.css';
import { Marvel } from './characters'
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

storeCharacters(0)
reportWebVitals();

async function getMarvelApiData(offset) {
    const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=100&ts=1&apikey=f8b46dec5b5113afebf06ce17dd6996d&hash=8dace3c545a3b063bd0287db636204fa`)
    return res.data
}

function storeCharacters(offset) { 
    getMarvelApiData(offset)
        .then(async (res) => {
            const data = res.data
            
            data.results.forEach((character) => {
                Marvel.characters.push(character)
            })

            if (data.limit + data.offset < data.total) {
                storeCharacters(data.limit + data.offset)
            }
            else {
                document.querySelector('.search-character').disabled = false
                document.querySelector('.search-button').classList.remove('disabled')
                document.querySelector('.main-spinner').classList.add('d-none')
            }
        })
}
