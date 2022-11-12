import React, {useState} from 'react'
import { Tab, Nav, Modal, Button } from 'react-bootstrap'
import Department from './departments'
export default function Invitemember() {
//for treenode
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
    setActive(!isActive);
  };
//for modal
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <div>
         <div className="page-title">Teams</div>
        
     <Tab.Container id="left-tabs-example" defaultActiveKey="Internal">
     <Nav variant="pills" className="ta-cta-group">
          <Nav.Link className="cta" eventKey="Internal">Internal</Nav.Link>
          <Nav.Link className="cta" eventKey="External">External</Nav.Link>
       </Nav>
   <Tab.Content className="form-add-wrapper p-y-5">
        <Tab.Pane eventKey="Internal">
       
        <div className="ta-form-group">
          <label for="Email" className="ta-label">Email</label>
          <input type="Email" className="ta-input" placeholder=" " />
          </div>
        <div className="ta-form-group">
          <label for="Role" className="ta-label"
            >Assign Role</label>
          <select className="ta-input">
            <option value="1"> Recruiter</option>
            <option value="2">Recruiting Manager</option>
            <option value="3">Evaluator</option>
          </select>
        </div>
        <div className="ta-form-group">
    <img src="images/add-btn.svg" alt="" className="add-dept" onClick={handleShow} />
          <label for="Department" className="ta-label">Department (optional)</label>
          <div onClick={handleToggle} className={`tree-drop-down ${isActive ? " " : "is-open"}`}
      > Department
      </div>
      <div className={`show-list ${isActive ? " " : "is-open"}`}>
      <ul className="parent-dept">
     <li>
         <div className="list-item">
         <div className="name">First One</div> 
        
       </div>
         <ul className="child-dept">
             <li>
         <div className="list-item">
              <div className="name">level 1.1</div> 
                
               </div>
             </li>
             <li>
         <div className="list-item">
                 
               <div className="name">level 1.2</div> 
                
           </div>                 </li>
         </ul>
   </li>
   <li>
       <div className="list-item">

       <div className="name">Second One</div> 
      
       </div>
       <ul className="child-dept">
           <li>
         <div className="list-item">

             <div className="name">level 2.1</div> 
              
             </div>
           </li>
           <li>
         <div className="list-item">

             <div className="name">level 2.2</div> 
              
             </div>
           </li>
       </ul>
 </li>
 <li>
   <div className="list-item">
   <div className="name">Third One</div> 
  
 </div>
 </li>
 </ul>
      </div>
        </div>
      
        <div className="cta-save-block">
          <button type="submit" className="cta-primary" >
            <div>Save</div>
          </button>
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="External">
        <div className="ta-form-group">
          <label for="Email" className="ta-label">Email</label>
          <input type="Email" className="ta-input" placeholder=" " />
          </div>
        <div className="cta-save-block">
          <button type="submit" className="cta-primary" >
            <div>Save</div>
          </button>
        </div>
        </Tab.Pane>
      </Tab.Content>
</Tab.Container>

<Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        className="sideModal"
      >
        <Modal.Header closeButton className="no-title">
        </Modal.Header>
        <Modal.Body>
         <Department />
        </Modal.Body>
       
      </Modal>
    
   </div>
  )
}

 