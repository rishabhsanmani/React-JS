import Child3 from "./Child3"


function Child2(props){
    return(
        <>
           <Child3 data = {props.data} />
        </>
    )
}

export default Child2