import React from 'react'

const Login = () => {
  return (
    <>

<div className="container">
        <div className='bg-Brand_Color p-2 flex justify-center pb-[200px]'>
          <form>
          <div className="login w-[540px] mt-[50px] ml-[148px] py-[30px] rounded-[20px] px-[72px] bg-[#FFFFFF] rounded[20px]">
            <div className=''>
            <h1 className='text-center font-semibold text-[28px] text-[#101828]'>Login to your account</h1>
            <h2 className='mt-[32px] mb-[12px] text-[16px] font-normal text-[#101828]'>Email</h2>
            <input type="email" className='w-[396px] h-[48px] border-solid border-2 border-blue-400 outline-none p-1 rounded-lg' placeholder='example@gmail.com' />
            <p className='text-[15px] text-red-600 font-bold'></p>

            </div>
            <div className="password_row flex justify-between mt-[24px] mb-[12px] text-[16px] font-normal">
              <h2>Password</h2>
              <p className='text-blue-400'>Forgot？</p>
            </div>
            <input type="password" className='w-[396px] h-[48px] border-solid border-2 border-blue-400 outline-none p-1 rounded-lg' placeholder='Enter your password' />
            <p className='text-[15px] text-red-600 font-bold mb-[32px]'></p>

            
           <button type='submit' className=" w-[396px] mb-[14px] p-[16px] bg-blue-500 text-white text-[16px]  font-medium rounded-[8px] hover:bg-[#F5004F] active:scale-110">
                Login now
            </button>

           
      
            

          </div>

          </form>
          

        </div>
        
      </div>
    
    
    </>
  )
}

export default Login