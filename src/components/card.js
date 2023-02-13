import './card.css'

export function Card(name, id, path, extension) {
    return `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${path}.${extension}" class="img-fluid" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
            </div>
        </div>
        
    `
}
