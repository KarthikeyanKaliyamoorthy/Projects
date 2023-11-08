import React from "react"

export const TodoRowItem:React.FC<{
    rowNo:number,
    desc:string,
    assigned:string, 
    deleteTodo:Function
}> = (props) => {
    
    return (
        <tr onClick={()=> props.deleteTodo(props.rowNo)}>
            <th scope="row">{props.rowNo}</th>
            <td>{props.desc}</td>
            <td>{props.assigned}</td>
        </tr>
    )
}