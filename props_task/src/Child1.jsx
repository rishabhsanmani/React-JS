import Child2 from "./Child2"


function Child1(props){
    return(
        <>
           <Child2 data = {props.name} />
        </>
    )
}

export default Child1