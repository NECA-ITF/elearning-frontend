import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomButton from '../customButton/CustomButton';


function CustomToast({title, content}) {

    const showToastMessage = () => {
        toast.success(`${content}`, {
            position: toast.POSITION.TOP_CENTER
        });
    };
  return (
    <div>
        <CustomButton onClick={showToastMessage} title={title}/>
        <ToastContainer />
        {/* How to implement */}
        {/* <CustomToast title="ok" content="deleted successfully"/>
        import CustomToast from './components/customToast/CustomToast'; */}
    </div>
  )
}

export default CustomToast
