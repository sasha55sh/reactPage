function Articles(props){

    //console.log(props)
    const definitions = props.data;
    return (
        <>
        {definitions.map((item, idx) => 
        <section key={idx}>
            <h2>{item.title}</h2>
            <div><p>{item.body}</p></div>
        </section>
        )}
        </>
    );
}

export default Articles;