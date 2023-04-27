
import '../Css/Drawer.css';
import {useSelector,useDispatch} from 'react-redux';
import { setListData,setCounter } from "../Redux/Action";
import DisplayTask  from "./DisplayTask";
function AddDataInList(props)
{
    const dispatch=useDispatch();
    const count=useSelector(state=>state.counter);
    const listData=useSelector(state=>state.iteam);
    
    const handleAddIteam=(event)=>{
        var tSummary= document.querySelector("#taskSummary").value;
        var tDiscription= document.querySelector("#taskDiscription").value;
        var oldIteam=listData;
        oldIteam.push({id:count+1,summary:tSummary,discription:tDiscription})
        dispatch(setListData(oldIteam));
        dispatch(setCounter(count+1));
        
    }
    return(
        <>
        <div className="addItem">
            <h3>{props.name}</h3>
            <div className="inputContent">
                <input id="taskSummary" type="text" placeholder="Task Summary"/>
                <textarea id="taskDiscription"  rows="4" columns="50" placeholder="Task Discription"/>                
            </div>
            <div>
                <button  onClick={()=>handleAddIteam()}>Add Task</button>
            </div>
            <div>
                <DisplayTask/>
            </div>
        </div>
        </>
    )
}

export default AddDataInList