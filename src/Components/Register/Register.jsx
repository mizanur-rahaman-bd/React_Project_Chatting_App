import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {

  const navigate = useNavigate()




  return (
    <>

      <div className="account">
        <div className="account_text_img_col">
        
            <h2>Find 3D Objects, Mockups and
            Illustrations here.</h2>
        
        <div className="home_page_img">
            <img src="images/registerbg.png" alt="register" />
        </div>

        </div>
        <div className="account_form_col">
          <div className="language_selector">
            <select name="Language" id="language_selec">
              <option>English(UK)</option>
              <option>English(USA)</option>
              <option>Bengali</option>
              <option>Spanish</option>
              <option>Arabic</option>
              <option>French</option>
              <option>Portuguese</option>
              <option>Russian</option>
              <option>German</option>
              <option>Japanese</option>
              
            </select>
          </div>
          <div className="heading">
            <h1>Create Account</h1>
          </div>
          <div className="other_account_login_access">
            <div className="google">
              <button><img src="images/googleLogo.png" alt="google" /> <p className='font-poppin font-medium text-[8px] lg:text-[18px]'>Sign up with google</p></button>

            </div>
            <div className="fb">
              <button><img src="images/fblogo.png" alt="fb" /><p className='font-poppin font-medium text-[8px] lg:text-[18px]'>Sign up with Facebook
              </p></button>

            </div>
          </div>
          <div className="or font-poppin font-medium text-[15px] lg:text-[36px] text-[#A6A6A6] text-center mt-[20px] lg:mt-[44px]">
            <h3>- OR -</h3>
          </div>
          <div className="register_form">
            <form className='register_form_info'>
              <div className='user_name text-center'>
                  <input type="text" placeholder='Full name' />

              </div>
              <div className="user_email text-center">
                 <input type="text" placeholder='Email Address' />

              </div>
              <div className="password text-center relative ">
                 <input type="password " placeholder='Password' />
                 <FaRegEyeSlash className=' absolute right-[20px] lg:right-[100px] top-4' /> 

              </div>
              
              <div className="user_info_submit_button text-center">
                <button type='submit'>Create Account</button>

              </div>
              <div className="user_account_login text-center">
                <p>Already have an account? <span onClick={()=> navigate('./login')} className='text-Brand_Color'>Login</span></p>

              </div>
              
              
              
              
              
            </form>
          </div>
            
        </div>

        

      </div>
    
    
    </>
  )
}

export default Register