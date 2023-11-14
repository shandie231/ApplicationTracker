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
      Job Input Page
      <form className='jobForm' onSubmit={(e) => submitJobForm(e)} style={{display:'flex', flexDirection: 'column', width: '10%' }} >
        <input className='comapanyName' type='text' placeholder='Company' onChange={(e) => setCompany(e.target.value)}/>
        <input className='companyLink' type='text' placeholder='CompanyLink' onChange={(e) => setCompanyLink(e.target.value)}/>
        <input className='title' type='text' placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
        <input className='dateApplied' type='string' placeholder='Date Applied' onChange={(e) => setDateApplied(e.target.value)}/>
        <input className='theirOffer' type='number' placeholder='thierOffer' onChange={(e) => setTheirOffer(Number(e.target.value))}/>
        <input className='myOffer' type='number' placeholder='myOffer' onChange={(e) => setMyOffer(Number(e.target.value))}/>
        <label>Did you send a cover letter?<input list='coverLetter' onChange={(e) => setCoverLetter(e.target.value)}/></label>
        <datalist id='coverLetter'>
          <option value='Cover Letter included' />
          <option value='No Cover Letter' />
        </datalist>
        <label>How did you apply?<input list='howApply' onChange={(e) => setHowApply(e.target.value)}/></label>
        <datalist id='howApply'>
          <option value='Site' />
          <option value='Email' />
          <option value='LinkedIn' />
          <option value='Indeed' />
          <option value='Recruiter' />
        </datalist>
        <input className='email' type='string' placeholder='Email?' onChange={(e) => setEmail(e.target.value)}/>
        <label>Which style did you apply with?<input list='ApplyStyle' onChange={(e) => setApplyStyle(e.target.value)}/></label>
        <datalist id='ApplyStyle'>
          <option value='Codesmith' />
          <option value='Quick' />
          <option value='Fast' />
        </datalist>
        <label>Were you Rejected?<input list='rejected' onChange={(e) => setRejected(e.target.value)}/></label>
        <datalist id='rejected'>
          <option value='Rejected' />
          <option value='Accepted' />
        </datalist>
        <input className='jobDescription' type='string' placeholder='Job Description' onChange={(e) => setDescription(e.target.value)}/>
        <label>Did you have an interview?<input list='interview' onChange={(e) => setInterview(e.target.value)}/></label>
        <datalist id='interview'>
          <option value='Yes' />
          <option value='No' />
        </datalist>
      </form>
    </div>


  )
}

export default JobInputForm;