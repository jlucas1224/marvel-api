export const Marvel = { 
    characters: [],
    /**
     * @param {string} name 
     * @returns {character[]}
     */
    getCharacters: function(name) {
        if(!name) return

        return this.characters.filter((character) => {
            return character.name.toLowerCase().includes(name.toLowerCase().trim())
        })
    },
}

/**
 * @typedef {Object} character
 * @property {Comics} comics
 * @property {string} description
 * @property {Events} events
 * @property {number} id
 * @property {string} modified
 * @property {string} name
 * @property {number} resourceURI
 * @property {Series} series
 * @property {Stories} stories
 * @property {Thumbnail} thumbnail
 * @property {Urls} urls
 * 
 * @typedef {Object} Thumbnail
 * @property {string} extension
 * @property {string} path
 * 
 * @typedef {Object} Urls
 * @property {string} type
 * @property {string} url
 * 
 * @typedef {Object} Stories
 * @property {number} available
 * @property {string} collectionURI
 * @property {Item[]} items
 * @property {number} returned
 * 
 * @typedef {Object} Series
 * @property {number} available
 * @property {string} collectionURI
 * @property {Item[]} items
 * @property {number} returned
 * 
 * @typedef {Object} Events
 * @property {number} available
 * @property {string} collectionURI
 * @property {Item[]} items
 * @property {number} returned
 * 
 * @typedef {Object} Comics
 * @property {number} available
 * @property {string} collectionURI
 * @property {Item[]} items
 * @property {number} returned
 * 
 * @typedef {Object} Item
 * @property {string} name
 * @property {string} resourceURI
 */