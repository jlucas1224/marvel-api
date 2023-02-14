import React, { useState } from 'react';
import { Marvel } from './characters';
import { CardList } from './cardList';
import './App.css';

export default function App() {
  const [cards, setCards] = useState([])

  function renderCards() {
      searchCharacters()
      setCards(cards.concat(<CardList key={cards.length}/>));
  }

  return (
    <div className="App">
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
                    onClick={renderCards}
                >
                    Procurar
                </button>
          </div>
      </div>
      <div className="content-body">
          <div className="spinner-border text-danger main-spinner" role="status"></div>
              <div className="alert alert-danger d-none character-not-found" role="alert">
                  Personagem não encontrado!
              </div>
              <div className="character-list">{cards}</div>
        </div>
    </div>
  )
}

function searchCharacters() {
  const characters = Marvel.getCharacters(document.querySelector('.search-character').value)
      
  document.querySelector('.character-list').innerHTML = ''
  document.querySelector('.character-not-found').classList.add('d-none')

  if(!characters || characters.length === 0) {
      document.querySelector('.character-not-found').classList.remove('d-none')

      return
  }

  Marvel.searchedCharacters = []

  characters?.forEach((character) => {
    Marvel.searchedCharacters.push(character)
  })
}
