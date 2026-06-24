
function MetricCards({title, value}){
    return(
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    )

}

export default MetricCards