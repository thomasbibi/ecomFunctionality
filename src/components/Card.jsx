

export default function Card(props){
    const {title , description,thumbnail} = props.data
    console.log(title)

    return <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={thumbnail}/>
    </div>
}