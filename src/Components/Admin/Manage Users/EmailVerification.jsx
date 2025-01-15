import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';

const EmailVerification = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/verify-email/${token}`);
        setVerificationStatus({ success: true, message: response.data.message });
      } catch (error) {
        setVerificationStatus({ success: false, message: error.response?.data?.message || 'Verification failed' });
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Email Verification</h2>
        {verificationStatus === null ? (
          <div className="text-center">
            <FaSpinner className="animate-spin text-4xl text-indigo-600 mx-auto mb-4" />
            <p className="text-gray-600">Verifying your email...</p>
          </div>
        ) : (
          <div className={`text-center ${verificationStatus.success ? 'text-green-600' : 'text-red-600'}`}>
            <p className="mb-4">{verificationStatus.message}</p>
            {verificationStatus.success ? (
              <FaCheckCircle className="mx-auto text-5xl text-green-500" />
            ) : (
              <FaTimesCircle className="mx-auto text-5xl text-red-500" />
            )}
          </div>
        )}
        <button
          onClick={() => navigate('/ManageUsers/Active')}
          className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Back to Users
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;

