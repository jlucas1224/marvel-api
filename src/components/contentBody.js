import React from 'react';
import '../App.css';

export function ContentBody() {
    return (
        <div className="content-body">
            <div className="spinner-border text-danger main-spinner" role="status">
            </div>
            <div className="alert alert-danger d-none character-not-found" role="alert">
                Personagem não encontrado!
            </div>
            <div className="character-list"></div>
        </div>
    );
}
