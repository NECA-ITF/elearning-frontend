import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomButton from '../customButton/CustomButton';


function CustomToast({title, content, status, style,payload}) {

    const showToastMessage = () => {
        (status==="success")?
        toast.success(`${content}`, {
            position: toast.POSITION.TOP_CENTER
        }):
        toast.error(`${content}`, {
          position: toast.POSITION.TOP_CENTER
      })
      
    };

    function handleToast(){
      if(payload){
        payload()
        showToastMessage()
      }else{
        showToastMessage()
      }
    }

  return (
    <div>
        <CustomButton onClick={handleToast} 
        style={style} 
        title={title}/>
        <ToastContainer />
        {/* How to implement */}
        {/* <CustomToast title="ok" content="deleted successfully"/>
        import CustomToast from './components/customToast/CustomToast'; */}
    </div>
  )
}

export default CustomToast
