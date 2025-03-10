import {useState} from 'react';
import {useDispatch} from 'react-redux'

function Form(){

  let dispatch = useDispatch();
  const [amount,setAmount]=useState('');
  const [mobile,setMobile]=useState('');
  const [username,setUsername]=useState('');
  return (
  <>
    <div className="container">
       <h2 className='text-primary'>ATM Machine</h2>
        <div className="row">
        <div className='col-4'>
          <input type="number" className="form-control" placeholder="Enter Amount" value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          />
        </div>
          <buttton className='btn btn-primary col-1'
          onClick={()=>{dispatch({type:'deposit', payload:amount})
          setAmount('');
         }}
          >Deposit</buttton> 


          <button className='btn btn-danger mx-2 col-1'
           onClick={()=>{dispatch({type:'withdraw',payload:amount})
           setAmount('');
          }}  
          >Withdraw</button>
          </div>
          
          <div className='row mt-2'>
            <div className='col-4'>
            <input type="text" className="form-control" placeholder="Enter usename" value={username}
             onChange={(e)=>setUsername(e.target.value)}
            />
            </div>
            <buttton className='btn btn-primary col-1'
              onClick={()=>{dispatch({type:'nameUpdate',payload:username})
              setUsername('');
            }}
            >Update</buttton>
          </div>

          <div className='row mt-2'>
            <div className='col-4'>
            <input type="text" className="form-control" placeholder="Enter M.Number" value={mobile}
             onChange={(e)=>{
              let data=e.target.value;
              setMobile(data);
            }}
            />
            </div>
            <buttton className='btn btn-primary col-1'
              onClick={()=>{ dispatch({type:'mobileUpdate', payload:mobile})
              setMobile('');
            }}
            >Update</buttton>
          </div>

          <button className='btn btn-success mt-5'
          onClick={()=>{dispatch({type:'reset'})
          setMobile('');
          setUsername('');
          setAmount('');
          }}
          >Reset</button>
     </div>
  </>
)
  
}
export default Form