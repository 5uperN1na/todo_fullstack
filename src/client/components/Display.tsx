import * as React from 'react';
import * as moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import type { ITodo } from '../utils/interfaces';

const Display: React.FC<DisplayProps> = ({ todo }) => {


    const history = useHistory();


    return (


        // <div className="col-md-3 mb-sm-10 mx-auto">

        // <div className="list-group mx-auto" onClick={() => history.push(`/details/${todo.id}`)} style={{ width: ' 18rem' }}>
        //     <ul className="list-group">
        //         <li className="list-group-item d-flex justify-content-between align-items-center">
        //             {todo.task}
        //             {/* <span className="badge badge-primary badge-pill">completed: {todo.completed}</span> */}
        //         </li>


        //         <li className="card-footer bg-primary d-flex justify-content-between align-items-center">
        //             <p><i>{moment(todo.created_at).format("MMM Do YYYY")}</i></p>
        //             <Link to={`/details/${todo.id}`} className="btn btn-success btn-sm">Continue</Link>

        //         </li>

        //     </ul>

        // </div>

     

        <div className="col-md-10 mb-sm-10 mx-auto" onClick={() => history.push(`/details/${todo.id}`)}>
            <ul className="list-group">
                <li className="list-group-item">{todo.task}</li>
                {/* <Link to={`/details/${todo.id}`} className="btn btn-success btn-sm">Continue</Link> */}


            </ul>
        </div>




        // </div>


    );



}

interface DisplayProps {
    todo: ITodo
}

export default Display;