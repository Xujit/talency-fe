import React from 'react'

function companyinfo1() {
  return (
    <div>
    <div className="page-title">Company Profile</div>
     <div className="page-tagline">
       Your profile completion is almost done, please complete the below
       details to start your journey!
     </div>
     <div className="progress-base">
       <div className="step step-1"></div>
     </div>
     <div className="form-add-wrapper">
       <form action="" method="post">
         <div className="ta-form-group">
           <label for="CompanyName" className="ta-label">Company Name</label>
           <input type="text" className="ta-input" placeholder=" " />
         </div>
         <div className="ta-form-group">
           <label for="CompanyWebsite" className="ta-label"
             >Company Website</label
           >
           <input type="text" className="ta-input" placeholder=" " />
         </div>
         <div className="ta-form-group">
           <label for="CompanyLogo" className="ta-label">Company Logo</label>
           <div className="ta-input file-drag">
             <input
               className="file-input"
               type="file"
               name="files[]"
               id="file"
               multiple=""
             />
             <label for="file">
               <div>
                 <img
                   src="images/upload-img.svg"
                   height="32px"
                   alt="talency"
                 />
               </div>
               <div>
                 Drag &amp; Drop or
                 <strong className="text-brand-primary"> Browse</strong> Files to Upload
               </div>
             </label>
             <small className="d-block">(Max file size is 2MB)</small>
           </div>
         </div>
         <div className="ta-form-group">
           <label for="CompanyDetails" className="ta-label"
             >Company Details</label
           >
           <textarea
             name=""
             className="ta-input"
             id=""
             cols="5"
             rows="5"
           ></textarea>
         </div>
         <div className="ta-form-group">
           <label for="Country" className="ta-label"
             >Country (registered location)</label
           >
           <select className="ta-input">
             <option value="1">US</option>
             <option value="2">Canada</option>
             <option value="3">INDIA</option>
           </select>
         </div>

         <div className="cta-save-block">
           <button type="submit" className="cta-primary" >
             <div>Save</div>
           </button>
         </div>
       </form>
     </div>
   </div>
  )
}

export default companyinfo1