import React from 'react';
import './contentHeader.css';
import { Marvel }  from '../characters';
import { Card } from './card';

export function ContentHeader() {
    return (
        <div className="content-header">
            <div className="input-group">
                <input
                    className="form-control search-character"
                    type="text"
                    disabled={true}
                    placeholder="Search for a character"
                />
                <button 
                    type="button" 
                    className="btn btn-danger search-button disabled"
                    onClick={searchCharacter}
                >
                    Procurar
                </button>
            </div>
        </div>
    );
}

function searchCharacter() {
    const characters = Marvel.getCharacters(document.querySelector('.search-character').value)

    document.querySelector('.character-list').innerHTML = ''
    document.querySelector('.character-not-found').classList.add('d-none')

    if(!characters || characters.length === 0) {
        document.querySelector('.character-not-found').classList.remove('d-none')
        return
    }

    characters?.forEach((character) => {
        document.querySelector('.character-list').innerHTML += Card(character.name, character.id, character.thumbnail.path, character.thumbnail.extension)
    })
}