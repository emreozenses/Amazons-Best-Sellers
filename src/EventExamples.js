import React from 'react'

const EventExamples = () => {
  const handleFormInput = (e)=>{
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log('handle form input');
  };
  const handleButtonClick = (e) =>{
    console.log(e);
    alert("handle button click");
  };
  const handleFormSubmission = (e) =>{
    e.preventDefault();
    console.log("form submitted");
  }
    return (
      <section>
        <form onSubmit={handleFormSubmission}>
          <h4 style={{marginBottom:'0',marginTop:'2rem'}}>Typical Form</h4>
          <input
            type="text"
            name="product"
            onChange={handleFormInput}
            style={{ margin: '0' }}
          />
          <button type="submit">Submit</button>
          <div>
            <button onClick={handleButtonClick}>click me</button>
          </div>
        </form>
      </section>
    )
}

export default EventExamples