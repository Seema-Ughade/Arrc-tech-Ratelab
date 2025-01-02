import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainlogo from '../../assets/mainlogo.png';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div
      className="min-h-screen grid md:grid-cols-2 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/login/6354d7761797e1666504566.jpg')`,
      }}
    >
      <div className="p-8 md:p-12 lg:p-16 bg-[#1a1b3a]/90">
        <div className="mb-8 text-center">
          <img src={mainlogo} alt="RateLab Logo" className="mx-auto h-28" />
        </div>

        {/* Social Login Buttons */}
        <div className="grid gap-4 mb-4">
          <div className="flex gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 p-3 bg-sky-400 text-white rounded-md flex-grow">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
            <button className="flex items-center justify-center gap-2 p-3 bg-red-500 text-white rounded-md flex-grow">
              <i className="fab fa-google"></i> Google
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 p-3 bg-blue-950 text-white rounded-md">
            <i className="fab fa-linkedin-in"></i> LinkedIn
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
              required
              className="w-full p-3 rounded-md bg-[#242551] border border-gray-700 text-white"
            />
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
                required
                className="w-full p-3 rounded-md bg-[#242551] border border-gray-700 text-white pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
      <i
        className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
        alt="Toggle password visibility"
        style={{ fontSize: '20px', cursor: 'pointer' }}
        onClick={() => setShowPassword(!showPassword)}
      ></i>

              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-400"
              />
              <label className="ml-2 text-sm text-white">Remember Me</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-[#FFA500] hover:bg-[#FF9500] rounded-md"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-white text-center cursor-pointer">
            Forgot Password?
          </p>
        </form>

        <p className="mt-6 text-xs text-white text-center">
          Copyright © 2025 RateLab. All Rights Reserved.
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-col items-center justify-center p-8 text-center text-white bg-[#1a1b3a]/90">
        <h3 className="text-[#FFA500] text-xl mb-2">Welcome Back Ratelab</h3>
        <h1 className="text-4xl font-bold mb-4">Login to your account</h1>
        <p>
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-[#FFA500]"
          >
            Create Now
          </button>
        </p>
      </div>
    </div>
  );
}
