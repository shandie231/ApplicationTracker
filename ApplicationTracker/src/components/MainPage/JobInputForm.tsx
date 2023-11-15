import React, {useState} from 'react'
import Navbar from '../Navbar';



const JobInputForm = () => {

  const [company, setCompany] = useState<string>();
  const [companyLink, setCompanyLink] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [theirOffer, setTheirOffer] = useState<number>();
  const [myOffer, setMyOffer] = useState<number>();
  const [coverLetter, setCoverLetter] = useState<string>();
  const [howApply, setHowApply] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [applyStyle, setApplyStyle] = useState<string>();
  const [dateApplied, setDateApplied] = useState<string>();
  const [rejected, setRejected] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [interview, setInterview] = useState<string>();
  
  const submitJobForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    

  }
  
  return(
    <div className='jobInputPage' >
      <Navbar />
      <div className='entries' style={{display:'flex', alignItems:'center', flexDirection:'column'}} >
        <h1>Application Information</h1>
        <form className='jobForm' onSubmit={(e) => submitJobForm(e)} style={{display:'flex', flexDirection: 'column', width: '15%' }} >
          <label>Comapny Name:</label>
          <input className='comapanyName' type='text' placeholder='Company' onChange={(e) => setCompany(e.target.value)}/><br></br>
          <label>Comapny Link:</label>
          <input className='companyLink' type='text' placeholder='CompanyLink' onChange={(e) => setCompanyLink(e.target.value)}/><br></br>
          <label>Job Title:</label>
          <input className='title' type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)}/><br></br>
          <label>Date Applied:</label>
          <input className='dateApplied' type='string' placeholder='Date Applied' onChange={(e) => setDateApplied(e.target.value)}/><br></br>
          <label>What $$$ they offer:</label>
          <input className='theirOffer' type='number' placeholder='thierOffer' onChange={(e) => setTheirOffer(Number(e.target.value))}/><br></br>
          <label>$$$ You want:</label>
          <input className='myOffer' type='number' placeholder='myOffer' onChange={(e) => setMyOffer(Number(e.target.value))}/><br></br>
          <label>Did you send a cover letter?<input placeholder='Cover/No Cover'list='coverLetter' onChange={(e) => setCoverLetter(e.target.value)}/></label>
          <datalist id='coverLetter'>
            <option value='Cover Letter included' />
            <option value='No Cover Letter' />
          </datalist><br></br>
          <label>How did you apply?<input placeholder='Site/Email/LinkedIn'list='howApply' onChange={(e) => setHowApply(e.target.value)}/></label>
          <datalist id='howApply'>
            <option value='Site' />
            <option value='Email' />
            <option value='LinkedIn' />
            <option value='Indeed' />
            <option value='Recruiter' />
          </datalist><br></br>
          <label>Who did you email?:</label>
          <input className='email' type='string' placeholder='Email?' onChange={(e) => setEmail(e.target.value)}/><br></br>
          <label>Which style did you apply with?<input placeholder='Codesmith/Quick/Fast' list='ApplyStyle' onChange={(e) => setApplyStyle(e.target.value)}/></label>
          <datalist id='ApplyStyle'>
            <option value='Codesmith' />
            <option value='Quick' />
            <option value='Fast' />
          </datalist><br></br>
          <label>Were you Rejected?<input placeholder='Rejected/Accepted' list='rejected' onChange={(e) => setRejected(e.target.value)}/></label>
          <datalist id='rejected'>
            <option value='Rejected' />
            <option value='Accepted' />
          </datalist><br></br>
          <label>Job Description:</label>
          <input className='jobDescription' type='string' placeholder='Job Description' onChange={(e) => setDescription(e.target.value)}/><br></br>
          <label>Did you have an interview?<input placeholder='Yes/No' list='interview' onChange={(e) => setInterview(e.target.value)}/></label>
          <datalist id='interview'>
            <option value='Yes' />
            <option value='No' />
          </datalist>
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    </div>


  )
}

export default JobInputForm;