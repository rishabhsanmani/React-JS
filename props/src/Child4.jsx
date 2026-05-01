// function Child4(props){
//     return(
//         <>
//            <h1> {props.variable.name} </h1>
//         </>
//     )
// }


// destructuring of object

function Child4({variable}){
    return(
        <>
           <h1> {variable.name} </h1>
        </>
    )
}

export default Child4