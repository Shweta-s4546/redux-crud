import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Creates() {

  const [user,setUser] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    phone:''
  })

  const [gender,setGender] = useState('')
  const readValue = async (e) => {
    const { name, value} = e.target
    setUser({...user,[name]:value})
  }

  const submitHandler = async (e) =>{
      e.preventDefault();
      try {
        let newUser = {
          ...user,
          gender
        }
        console.log('new user', newUser)
      } catch (err) {
        toast.error(err.msg)
      }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-success">
          <h3 className="display-3 txet-center">Create User</h3>
        </div>
      </div>
     
     <div className="row">
          <div className="col-md-6 offset-md-3">
            <form autoComplete='off' onSubmit={submitHandler}>
              <div className="form-group mt-2">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name='firstName' id='firstName' value={user.firstName} onChange={readValue} className='form-control' />
              </div>
              <div className="form-group mt-2">
              <label htmlFor="firstName">Last Name</label>
                  <input type="text" name='lastName' id='lastName' value={user.lastName} onChange={readValue} className='form-control' />
              </div>
              <div className="form-group mt-2">
              <label htmlFor="firstName">Age</label>
                  <input type="text" name='age' id='age' value={user.age} onChange={readValue} className='form-control' />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="gender">Gender</label><br/>
                <div className="form-check form-check-inline">
                  <input type="radio" name='gender' value={'male'} checked={gender== "male"} onChange={(e) => setGender(e.target.value)} id='gender' className='form-check-input' required />
                  <label htmlFor="gender"className='form-check-label'>Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" name='gender' value={'female'} checked={gender== "female"} onChange={(e) => setGender(e.target.value)} id='gender' className='form-check-input' required />
                  <label htmlFor="gender"className='form-check-label'>Female</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" name='gender' value={'transgender'} checked={gender== "transgender"} onChange={(e) => setGender(e.target.value)} id='gender' className='form-check-input' required />
                  <label htmlFor="gender"className='form-check-label'>Transgender</label>
                </div>
              </div>
              <div className="form-group mt-2">
              <label htmlFor="firstName">Email</label>
                  <input type="text" name='email' id='email' value={user.email} onChange={readValue} className='form-control' />
              </div>
              <div className="form-group mt-2">
              <label htmlFor="firstName">Phone Num</label>
                  <input type="text" name='phone' id='phone' value={user.phone} onChange={readValue} className='form-control' />
              </div>
              <div className="form-group mt-2">
                <input type="submit" value='Create User' className='btn btn-success' />
              </div>
            </form>
          </div>
     </div>
    </div>
  )
}

export default Creates