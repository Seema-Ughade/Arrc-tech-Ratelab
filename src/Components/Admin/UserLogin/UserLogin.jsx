// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import mainlogo from '../../assets/mainlogo.png';

// export default function Login() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         navigate('/dashboard');
//       } else {
//         alert(data.error);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('An error occurred during login');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   return (
//     <div
//       className="min-h-screen grid md:grid-cols-2 bg-cover bg-center"
//       style={{
//         backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/login/6354d7761797e1666504566.jpg')`,
//       }}
//     >
//       <div className="p-8 md:p-12 lg:p-16 bg-[#1a1b3a]/90">
//         <div className="mb-8 text-center">
//           <img src={mainlogo} alt="RateLab Logo" className="mx-auto h-28" />
//         </div>

//         {/* Social Login Buttons */}
//         <div className="grid gap-4 mb-4">
//           <div className="flex gap-4 justify-center">
//             <button className="flex items-center justify-center gap-2 p-3 bg-sky-400 text-white rounded-md flex-grow">
//               <i className="fab fa-facebook-f"></i> Facebook
//             </button>
//             <button className="flex items-center justify-center gap-2 p-3 bg-red-500 text-white rounded-md flex-grow">
//               <i className="fab fa-google"></i> Google
//             </button>
//           </div>
//           <button className="flex items-center justify-center gap-2 p-3 bg-blue-950 text-white rounded-md">
//             <i className="fab fa-linkedin-in"></i> LinkedIn
//           </button>
//         </div>

//         <div className="relative my-8">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-600"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 text-white bg-[#1a1b3a]">OR</span>
//           </div>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <label className="text-sm text-white">
//               Username or Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-md bg-[#242551] border border-gray-700 text-white"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm text-white">
//               Password <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded-md bg-[#242551] border border-gray-700 text-white pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2"
//               >
//       <i
//         className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
//         alt="Toggle password visibility"
//         style={{ fontSize: '20px', cursor: 'pointer' }}
//         onClick={() => setShowPassword(!showPassword)}
//       ></i>

//               </button>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="rememberMe"
//                 checked={formData.rememberMe}
//                 onChange={handleChange}
//                 className="w-4 h-4 rounded border-gray-400"
//               />
//               <label className="ml-2 text-sm text-white">Remember Me</label>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 text-white bg-[#FFA500] hover:bg-[#FF9500] rounded-md"
//           >
//             Login
//           </button>

//           <p className="mt-4 text-sm text-white text-center cursor-pointer">
//             Forgot Password?
//           </p>
//         </form>

//         <p className="mt-6 text-xs text-white text-center">
//           Copyright © 2025 RateLab. All Rights Reserved.
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="hidden md:flex flex-col items-center justify-center p-8 text-center text-white bg-[#1a1b3a]/90">
//         <h3 className="text-[#FFA500] text-xl mb-2">Welcome Back Ratelab</h3>
//         <h1 className="text-4xl font-bold mb-4">Login to your account</h1>
//         <p>
//           Don't have an account?{' '}
//           <button
//             onClick={() => navigate('/register')}
//             className="text-[#FFA500]"
//           >
//             Create Now
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainlogo from '../../../assets/mainlogo.png';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function UserLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        try {
            const response = await fetch('https://arrc-tech-ratelab-backend.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),  // Send the form data as JSON
            });

            const data = await response.json();

            if (response.ok) {
                const { token, user } = data;

                // Store the token and user object in localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));

                navigate('/user');
            } else {
                setErrors({ api: data.error || "Login failed" });
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrors({ api: 'An error occurred during login' });
        }
    }
};

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email.trim()) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid";
    if (!formData.password) formErrors.password = "Password is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear the error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-cover bg-center" style={{
      backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/login/6354d7761797e1666504566.jpg')`,
    }}>
      <div className="p-8 md:p-12 lg:p-16 bg-[#1a1b3a]/90">
        <div className="mb-8 text-center">
          <img src={mainlogo} alt="RateLab Logo" className="mx-auto h-28" />
        </div>

        {/* Social Login Buttons */}
        <div className="grid gap-4 mb-8">
          <div className="flex gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 p-3 bg-sky-400 text-white rounded-md flex-grow hover:bg-sky-500 transition duration-300">
              <FaFacebookF /> Facebook
            </button>
            <button className="flex items-center justify-center gap-2 p-3 bg-red-500 text-white rounded-md flex-grow hover:bg-red-600 transition duration-300">
              <FaGoogle /> Google
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 p-3 bg-blue-950 text-white rounded-md hover:bg-blue-900 transition duration-300">
            <FaLinkedinIn /> LinkedIn
          </button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-white bg-[#1a1b3a]">OR</span>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-white">
              Username or Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-md bg-[#242551] border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition duration-300`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 rounded-md bg-[#242551] border ${errors.password ? 'border-red-500' : 'border-gray-700'} text-white pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition duration-300`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition duration-300"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-400 text-[#FFA500] focus:ring-[#FFA500]"
              />
              <label className="ml-2 text-sm text-white">Remember Me</label>
            </div>
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-sm text-[#FFA500] hover:underline focus:outline-none"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-[#FFA500] hover:bg-[#FF9500] rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        {errors.api && <p className="mt-4 text-red-500 text-sm text-center">{errors.api}</p>}

        <p className="mt-4 text-sm text-white text-center">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/user/Register")}
            className="text-[#FFA500] hover:underline focus:outline-none"
          >
            Create Now
          </button>
        </p>

        <p className="mt-6 text-xs text-white text-center">
          Copyright © {new Date().getFullYear()} RateLab. All Rights Reserved.
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-col items-center justify-center p-8 text-center text-white bg-[#1a1b3a]/90">
        <h3 className="text-[#FFA500] text-xl mb-2">Welcome Back to RateLab</h3>
        <h1 className="text-4xl font-bold mb-4">Login to your account</h1>
        <p>
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/user/Register')}
            className="text-[#FFA500] hover:underline focus:outline-none"
          >
            Create Now
          </button>
        </p>
      </div>
    </div>
  );
}

