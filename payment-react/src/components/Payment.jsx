import React from 'react'
// import './App.css';

function Payment() {
  return (
    <div>
      <p className='paymentTitle'> Payment </p>
      <div className='backgroundRadius'>
        <p className='p'> Personal Information </p>
        <div>        
          <input className='inputName' type='text' placeholder='  First Name'/> &nbsp; &nbsp;
          <input className='inputName'type='text' placeholder='  Last Name' />
        </div>

        <div> <br></br>
          <input className='inputs' type='text' placeholder='  Address'/>
        </div>

        <div> <br></br>
          <input className='inputs' type='email' placeholder='  Email'/>
        </div>

        <div> <br></br>
          <input className='inputs' type='tel' placeholder='  Phone Number'/>
        </div><br></br>

        <p className='p'> Billing </p>

        <div> 
          <input className='inputs' type='text' placeholder='  Choose Mode Of Payment'/>
        </div>

        <div> <br></br>
          <input className='inputs' type='number' placeholder='  Enter the Total Amount'/>
        </div> 
        <br></br>
        <button className='pay' type="submit"> Pay </button> 
      </div> <br></br><br></br>
    </div>
  );
}

export default Payment;