import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example API call to send data to your database
    const response = await fetch('https://your-backend-api.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    const data = await response.json();
    if (data.success) {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center max-h-screen bg-gray-50 m-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" className="h-8" />
          <h2 className='text-3xl'>Microsoft</h2>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email address, phone number or Skype
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 border-t-0 border-l-0 border-r-0"
              placeholder="Email, phone or Skype"
              required
            />
          </div>
          <div className="text-sm">
            <a href="#" className="hover:underline">No account? <span className='text-blue-600'>Create one!</span></a>
          </div>
          <div className="text-sm text-blue-600">
            <a href="#" className="hover:underline">Can't access your account?</a>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 mr-3"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </form>
        <div className="mt-6">
          <button className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
            <i className="fas fa-key mr-2"></i> Sign-in options
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
