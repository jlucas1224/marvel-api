export function Card(props) {
    const src = `${props.path}.${props.extension}`

    return (
        <div className="card character-card">
            <img className="card-img-top img-fluid" src={src} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
    )
}
