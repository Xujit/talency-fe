import React from 'react'

function companyinfo2() {
  return (
    
    <div>
    <div className="page-title">Company Profile</div>
    <div className="page-tagline">
        Just one more step, please complete the below details to start your journey
    </div>
    <div className="progress-base">
      <div className="step step-2"></div>
    </div>
    <div className="form-add-wrapper">
      <form action="" method="post">
        <div className="ta-form-group">
          <label for="CompanyIndustry" className="ta-label">Company Industry</label>
          <select className="ta-input">
            <option value="1">IT</option>
            <option value="2">Consumer Goods</option>
            <option value="3">Logistics</option>
          </select> </div>
        <div className="ta-form-group">
          <label for="CompanySize" className="ta-label"
            >Company Size</label
          >
          <select className="ta-input">
            <option value="1"> &gt; 50</option>
            <option value="2">100</option>
            <option value="3">200</option>
          </select>
        </div>
        <div className="ta-form-group">
          <label for="POE" className="ta-label">Proof of Establishment</label>
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
          <label for="TaxId" className="ta-label"
            >Tax Id</label
          >
          <input type="text" className="ta-input" placeholder=" " />
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

export default companyinfo2