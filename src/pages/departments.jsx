import React from 'react'

function departments() {
  return (
    <div>
    <div className="page-title">Add Department</div>
<div className="page-tagline">
   adding a department will help to share & track the jobs and candidates can filter the suitable matching jobs. 
</div>
<div className="form-add-wrapper-50 p-y-5">
 <div className="ta-input-group">
     <input type="text" placeholder="Top Level Department" className="ta-input" />
     <div className="ta-input-group-cta">
       <button type="submit" className="cta-primary">
           <div>Add</div>
         </button>
     </div>
 </div>
 <hr />
 <ul className="parent-dept">
     <li>
         <div className="list-item">
         <div className="name">First One</div> 
         <div className="actions">
                   <a href="#">
                       <span className="fi fi-rr-plus"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-pencil"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-arrow-up"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-cross"></span>
                     </a>
               </div>     
       </div>
         <ul className="child-dept">
             <li>
         <div className="list-item">
              <div className="name">level 1.1</div> 
               <div className="actions">
                  
                     <a href="#">
                       <span className="fi fi-rr-pencil"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-arrow-up"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-cross"></span>
                     </a>
               </div>     
               </div>
             </li>
             <li>
         <div className="list-item">
                 
               <div className="name">level 1.2</div> 
               <div className="actions">
                  
                     <a href="#">
                       <span className="fi fi-rr-pencil"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-arrow-up"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-cross"></span>
                     </a>
               </div>     
           </div>                 </li>
         </ul>
   </li>
   <li>
       <div className="list-item">

       <div className="name">Second One</div> 
       <div className="actions">
                   <a href="#">
                       <span className="fi fi-rr-plus"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-pencil"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-arrow-up"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-cross"></span>
                     </a>
               </div>     
       </div>
       <ul className="child-dept">
           <li>
         <div className="list-item">

             <div className="name">level 2.1</div> 
             <div className="actions">
                  
                     <a href="#">
                       <span className="fi fi-rr-pencil"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-arrow-up"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-cross"></span>
                     </a>
               </div>     
             </div>
           </li>
           <li>
         <div className="list-item">

             <div className="name">level 2.2</div> 
             <div className="actions">
                  
                     <a href="#">
                       <span className="fi fi-rr-pencil"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-arrow-up"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-cross"></span>
                     </a>
               </div>     
             </div>
           </li>
       </ul>
 </li>
 <li>
   <div className="list-item">
   <div className="name">Third One</div> 
   <div className="actions">
                   <a href="#">
                       <span className="fi fi-rr-plus"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-pencil"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-arrow-up"></span>
                     </a>
                     <a href="#">
                       <span className="fi fi-rr-cross"></span>
                     </a>
               </div>     
 </div>
 </li>
 </ul>
 <div className="cta-save-block">
   <button type="submit" className="cta-nrml cta-primary">
       <div>Save</div>
     </button>
     <button type="submit" className="cta-nrml cta-default">
       <div>Cancel</div>
     </button>
 </div>
</div>
</div>
    
  )
}

export default departments