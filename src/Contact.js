import React, { useState } from "react";


function Contact() {

  const [data,setData] = useState({
    fullname: '',
    phone:'',
    email:'',
    msg:'',
  })

  const inputEvent = (event) =>
  {
    const{name,value} = event.target; //object destructuring
    setData((preVal)=>
    {
      return{
        ...preVal,
        [name]:value, 
      }
    })
   
  }

  const formSubmit = (e) =>
  {
    e.preventDefault();
    alert(`My name is ${data.fullname}.My phone Number is ${data.phone}`)
  }
  return (
    <>
    <div className="my-5">
      <h1 className="text-center">Contact Us </h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label font-weight-bold">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name ="fullname" value ={data.fullname} onChange={inputEvent}  placeholder="Enter your Name"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label font-weight-bold">Phone Number</label>
            <textarea type="number" className="form-control" id="exampleFormControlInput1"name ="phone" value={data.phone} onChange={inputEvent}  placeholder="Mobile Number"></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label font-weight-bold">Email Address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" name ="email" value ={data.email} onChange={inputEvent}  placeholder="name@example.com"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label font-weight-bold">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"name ="msg" value ={data.msg} onChange={inputEvent}  placeholder="Enter message" type="text"></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
