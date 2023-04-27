
import {useSelector,useDispatch} from 'react-redux';
import { setListData } from "../Redux/Action";

function DisplayTask(props)
{
    const listData=useSelector(state=>state.iteam);
    const dispatch=useDispatch();

    const handleRemoveIteam=(id)=>{
        console.log(typeof(id));
        listData.filter(x=>
            console.log(typeof(x.id)),
            );
        var remaningList=
        listData.filter(x=>
            x.id!==parseInt(id)
            );
            console.log(remaningList);
            
            dispatch(setListData(remaningList));
            //dispatch(setCounter(count+1));
            
        }
    
    
    return(<>
        <div>
            <table>
                <th>
                    ID
                </th>
                <th>
                    Task
                </th>
                <th>Action</th>
                    {listData.map((e)=>
                    {
                        return(<tr>
                            <td>{e.id}</td>
                            <td>{e.summary}</td>
                            <td><button onClick={()=>handleRemoveIteam(e.id)}>Delete</button></td>
                        </tr>)
                    }
                    )}
            </table>
        </div>
    </>)
}
export default DisplayTask;