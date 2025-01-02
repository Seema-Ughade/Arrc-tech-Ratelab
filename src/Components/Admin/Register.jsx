import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainlogo from '../../assets/mainlogo.png';

export default function Register() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration');
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
        <div className="grid gap-4 mb-8">
          <div className="flex gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 p-3 bg-sky-400 text-white  rounded-md flex-grow">
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
                  required
                  className="w-full p-3 rounded-md bg-[#242551] border border-gray-700 text-white"
                />
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
              required
              className="w-full p-3 rounded-md bg-[#242551] border border-gray-700 text-white"
            />
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
                  required
                  className="w-full p-3 rounded-md bg-[#242551] border border-gray-700 text-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => field.toggle(!field.state)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
<i
  className={`fa ${field.state ? 'fa-eye-slash' : 'fa-eye'}`}
  alt="Toggle password visibility"
  style={{ fontSize: '20px' }}
></i>
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
              className="w-4 h-4 rounded border-gray-400"
            />
            <label className="text-sm text-white">
              I agree with{" "}
              <a href="#" className="text-[#FFA500]">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#FFA500]">
                Terms of Service
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-[#FFA500] hover:bg-[#FF9500] rounded-md"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-white text-center">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/sign-up")}
            className="text-[#FFA500]"
          >
            Login
          </button>
        </p>

        <p className="mt-6 text-xs text-white text-center">
          Copyright © 2025 RateLab. All Rights Reserved.
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-col items-center justify-center p-8 text-center text-white bg-[#1a1b3a]/90">
        <h3 className="text-[#FFA500] text-xl mb-2">Welcome to RateLab</h3>
        <h1 className="text-4xl font-bold mb-4">Create an Account</h1>
        <p>
          Already have an account?{' '}
          <button
            onClick={() => navigate('/sign-up')}
            className="text-[#FFA500]"
          >
            Login Now
          </button>
        </p>
      </div>
    </div>
  );
}

