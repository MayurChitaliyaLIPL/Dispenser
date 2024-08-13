import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {MiniDrawer} from './sidebar';
 
function CompanyRegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  const onSubmit = (data) => {
    console.log(data);
  };
 
  return (
  
    <div className="container-fluid mt-5 ">
      <div className="row ">
        {/* Main form section */}
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Company Registration</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Company Name and Avatar Inline */}
                <div className="row mb-3 align-items-center">
                  <div className="col-8">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                      {...register('companyName', { required: true })}
                    />
                    {errors.companyName && <div className="invalid-feedback">Company Name is required</div>}
                  </div>
                  <div className="col-2 text-center">
                    <label className="form-label"></label>
                    <div className="avatar-frame mb-3">
                      <img
                        src="https://via.placeholder.com/80"
                        alt="Avatar"
                        className="img-thumbnail"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      />
                    </div>
                    <input type="file" className="form-control-file" />
                  </div>
                </div>
 
                {/* Other form fields */}
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <label className="form-label">Street</label>
                    <input
                      type="text"
                      className={`form-control ${errors.street ? 'is-invalid' : ''}`}
                      {...register('street', { required: true })}
                    />
                    {errors.street && <div className="invalid-feedback">Street is required</div>}
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label">Street 2</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register('street2')}
                    />
                  </div>
                </div>
 
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      {...register('city', { required: true })}
                    />
                    {errors.city && <div className="invalid-feedback">City is required</div>}
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                      {...register('state', { required: true })}
                    />
                    {errors.state && <div className="invalid-feedback">State is required</div>}
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label">PIN</label>
                    <input
                      type="text"
                      className={`form-control ${errors.pin ? 'is-invalid' : ''}`}
                      {...register('pin', { required: true, pattern: /^[1-9][0-9]{5}$/ })}
                    />
                    {errors.pin && <div className="invalid-feedback">Valid PIN is required</div>}
                  </div>
                </div>
 
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <label className="form-label">GSTIN</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register('gstin')}
                    />
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label">PAN NO</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register('pan')}
                    />
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label">TAN NO</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register('tan')}
                    />
                  </div>
                </div>
 
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && <div className="invalid-feedback">Phone number is required</div>}
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label">Mobile</label>
                    <input
                      type="text"
                      className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                      {...register('mobile', { required: true, pattern: /^[6-9]\d{9}$/ })}
                    />
                    {errors.mobile && <div className="invalid-feedback">Valid Mobile number is required</div>}
                  </div>
                </div>
 
                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    />
                    {errors.email && <div className="invalid-feedback">Valid Email is required</div>}
                  </div>
                </div>
 
                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      {...register('password', { required: true })}
                    />
                    {errors.password && <div className="invalid-feedback">Password is required</div>}
                  </div>
                </div>
 
                <div className="row mb-3">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
 
          {/* Navigation and additional sections */}
          <nav className="navbar navbar-expand-sm bg-light navbar-light mt-4">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Detail</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bank Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Internal Notes</a>
              </li>
            </ul>
          </nav>
 
          {/* Contact Detail Section */}
          <div className="card mt-2">
            <div className="card-body">
              <h6>Contact Detail</h6>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contactName')}
                  />
                </div>
                <div className="col-sm-3">
                  <label className="form-label">Mobile No.</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contactMobile')}
                  />
                </div>
                <div className="col-sm-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contactEmail')}
                  />
                </div>
                <div className="col-sm-3">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contactRole')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Chat section */}
        <div className="col-lg-4 d-flex flex-column">
          <div className="card flex-grow-1">
            <div className="card-body">
              <h5 className="card-title">Chat Section</h5>
              <div className="chat-window" style={{ height: '300px', overflowY: 'scroll' }}>
                {/* Chat messages */}
                <div className="d-flex mb-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Avatar 1"
                    className="rounded-circle me-2"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div>
                    <div className="fw-bold">User 1</div>
                    <div>Hello! How are you?</div>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Avatar 2"
                    className="rounded-circle me-2"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div>
                    <div className="fw-bold">User 2</div>
                    <div>I'm good, thanks! How about you?</div>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Avatar 1"
                    className="rounded-circle me-2"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div>
                    <div className="fw-bold">User 1</div>
                    <div>I'm doing well. Thanks for asking!</div>
                  </div>
                </div>
              </div>
              <div className="input-group mt-3">
                <input type="text" className="form-control" placeholder="Type a message..." />
                <button className="btn btn-primary" type="button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
  );
}
 
export default CompanyRegistrationForm;