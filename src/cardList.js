import { Marvel } from './characters'
import { Card } from './components/card'

export function CardList() {
    const list = Marvel.searchedCharacters

    return (
        list
        .map(character => 
            <Card 
                name={character.name} 
                id={character.id} 
                path={character.thumbnail.path} 
                extension={character.thumbnail.extension} 
                key={character.id}
            />
        )
    )
}
