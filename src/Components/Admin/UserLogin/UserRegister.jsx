
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainlogo from '../../../assets/mainlogo.png';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function UserRegister() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('https://arrc-tech-ratelab-backend-project.onrender.com/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),  // Send formData without role
        });

        const data = await response.json();

        if (response.ok) {
          navigate('/user/login');
        } else {
          setErrors({ api: data.error || "Registration failed" });
        }
      } catch (error) {
        console.error('Registration error:', error);
        setErrors({ api: 'An error occurred during registration' });
      }
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim()) formErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) formErrors.lastName = "Last name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid";
    if (!formData.password) formErrors.password = "Password is required";
    else if (formData.password.length < 6) formErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeToTerms) formErrors.agreeToTerms = "You must agree to the terms";

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

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "First Name", name: "firstName" },
              { label: "Last Name", name: "lastName" }
            ].map((field) => (
              <div key={field.name} className="space-y-2">
                <label className="text-sm text-white">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-[#242551] border ${errors[field.name] ? 'border-red-500' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition duration-300`}
                />
                {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white">
              E-Mail Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-md bg-[#242551] border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition duration-300`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {[
            { label: "Password", name: "password", state: showPassword, toggle: setShowPassword },
            { label: "Confirm Password", name: "confirmPassword", state: showConfirmPassword, toggle: setShowConfirmPassword }
          ].map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="text-sm text-white">
                {field.label} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={field.state ? 'text' : 'password'}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-[#242551] border ${errors[field.name] ? 'border-red-500' : 'border-gray-700'} text-white pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition duration-300`}
                />
                <button
                  type="button"
                  onClick={() => field.toggle(!field.state)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition duration-300"
                >
                  {field.state ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-400 text-[#FFA500] focus:ring-[#FFA500]"
            />
            <label className="text-sm text-white">
              I agree with{" "}
              <a href="#" className="text-[#FFA500] hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#FFA500] hover:underline">
                Terms of Service
              </a>
            </label>
          </div>
          {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}

          <button
            type="submit"
            className="w-full p-3 text-white bg-[#FFA500] hover:bg-[#FF9500] rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-opacity-50"
          >
            Register
          </button>
        </form>

        {errors.api && <p className="mt-4 text-red-500 text-sm text-center">{errors.api}</p>}

        <p className="mt-4 text-sm text-white text-center">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/user/login")}
            className="text-[#FFA500] hover:underline focus:outline-none"
          >
            Login
          </button>
        </p>

        <p className="mt-6 text-xs text-white text-center">
          Copyright © {new Date().getFullYear()} RateLab. All Rights Reserved.
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-col items-center justify-center p-8 text-center text-white bg-[#1a1b3a]/90">
        <h3 className="text-[#FFA500] text-xl mb-2">Welcome to RateLab</h3>
        <h1 className="text-4xl font-bold mb-4">Create an Account</h1>
        <p>
          Already have an account?{' '}
          <button
            onClick={() => navigate('/user/login')}
            className="text-[#FFA500] hover:underline focus:outline-none"
          >
            Login Now
          </button>
        </p>
      </div>
    </div>
  );
}

