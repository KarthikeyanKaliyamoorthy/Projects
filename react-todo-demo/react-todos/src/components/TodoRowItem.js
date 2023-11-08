function TodoRowItem(props){

    return (
        <tr onClick={()=> props.deleteTodo(props.rowNo)}>
            <th scope="row">{props.rowNo}</th>
            <td>{props.desc}</td>
            <td>{props.assigned}</td>
        </tr>
    )
}

export default TodoRowItem