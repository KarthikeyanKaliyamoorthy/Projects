class TodoModel {
    rowNo: number;
    desc: string;
    assigned:string;

    constructor( rowNo: number, desc: string, assigned:string) {
        this.rowNo=rowNo;
        this.desc=desc;
        this.assigned=assigned;
    }
}

export default TodoModel