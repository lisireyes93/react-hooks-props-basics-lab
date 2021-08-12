

function Links(props) {
    return (
        
        <>
            <h3>Links</h3>
            <a href={props.userstuff.links.github}>  {props.userstuff.links.github} </a>
            <a href={props.userstuff.links.linkedin}> {props.userstuff.links.linkedin} </a>

        </>
    )
}


export default Links;