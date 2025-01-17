// // import React from "react";

// // const ContactUs = () => {
// //   return (
// //     <div className="flex flex-col mt-16 md:flex-row items-center justify-center bg-gradient-to-r from-white to-yellow-50 p-6 md:p-12">
// //       {/* Form Section */}
// //       <div className="flex-1 bg-white shadow-lg rounded-lg p-6 md:p-10">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
// //         <form className="space-y-4">
// //           {/* Full Name */}
// //           <div>
// //             <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-1">
// //               Full Name<span className="text-red-500">*</span>
// //             </label>
// //             <div className="flex items-center border border-gray-300 rounded-lg p-2">
// //               <i className="fas fa-user text-gray-400"></i>
// //               <input
// //                 type="text"
// //                 id="fullName"
// //                 placeholder="Full Name"
// //                 className="flex-1 border-0 focus:ring-0 outline-none ml-2 text-gray-700"
// //               />
// //             </div>
// //           </div>

// //           {/* Email Address */}
// //           <div>
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
// //               Email Address<span className="text-red-500">*</span>
// //             </label>
// //             <div className="flex items-center border border-gray-300 rounded-lg p-2">
// //               <i className="fas fa-envelope text-gray-400"></i>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 placeholder="Email address"
// //                 className="flex-1 border-0 focus:ring-0 outline-none ml-2 text-gray-700"
// //               />
// //             </div>
// //           </div>

// //           {/* Subject */}
// //           <div>
// //             <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
// //               Subject<span className="text-red-500">*</span>
// //             </label>
// //             <div className="flex items-center border border-gray-300 rounded-lg p-2">
// //               <i className="fas fa-tag text-gray-400"></i>
// //               <input
// //                 type="text"
// //                 id="subject"
// //                 placeholder="Subject Line"
// //                 className="flex-1 border-0 focus:ring-0 outline-none ml-2 text-gray-700"
// //               />
// //             </div>
// //           </div>

// //           {/* Message */}
// //           <div>
// //             <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
// //               Message<span className="text-red-500">*</span>
// //             </label>
// //             <textarea
// //               id="message"
// //               rows="4"
// //               placeholder="Write message"
// //               className="w-full border border-gray-300 rounded-lg p-2 focus:ring-0 outline-none text-gray-700"
// //             ></textarea>
// //           </div>

// //           {/* Recaptcha */}
// //           <div>
// //             <div className="g-recaptcha" data-sitekey="your-site-key"></div>
// //           </div>

// //           {/* Submit Button */}
// //           <div>
// //             <button
// //               type="submit"
// //               className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         </form>
// //       </div>

// //       {/* Contact Details Section */}
// //       <div className="flex-1 bg-blue-900 text-white shadow-lg rounded-lg p-6 md:p-10 mt-6 md:mt-0 md:ml-6">
// //         <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
// //         <ul className="space-y-4">
// //           <li className="flex items-center">
// //             <i className="fas fa-map-marker-alt text-orange-400 mr-3"></i>
// //             <span>West-Uttara, Texas 1230, USA</span>
// //           </li>
// //           <li className="flex items-center">
// //             <i className="fas fa-phone text-orange-400 mr-3"></i>
// //             <span>+880123456789</span>
// //           </li>
// //           <li className="flex items-center">
// //             <i className="fas fa-envelope text-orange-400 mr-3"></i>
// //             <span>demo.support@gmail.com</span>
// //           </li>
// //         </ul>
// //         <div className="mt-6 flex space-x-4">
// //           <a href="#" className="text-white hover:text-orange-400">
// //             <i className="fab fa-facebook-f"></i>
// //           </a>
// //           <a href="#" className="text-white hover:text-orange-400">
// //             <i className="fab fa-twitter"></i>
// //           </a>
// //           <a href="#" className="text-white hover:text-orange-400">
// //             <i className="fab fa-instagram"></i>
// //           </a>
// //           <a href="#" className="text-white hover:text-orange-400">
// //             <i className="fab fa-pinterest"></i>
// //           </a>
// //           <a href="#" className="text-white hover:text-orange-400">
// //             <i className="fab fa-youtube"></i>
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactUs;


// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="flex flex-col mt-16 md:flex-row items-stretch justify-center bg-gradient-to-r from-white to-yellow-50 p-6 md:p-12">
//       {/* Form Section */}
//       <div className="flex-1 bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-col">
//         <form className="space-y-6 flex-grow">
//           {/* Full Name and Email Address */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-1">
//                 Full Name<span className="text-red-500">*</span>
//               </label>
//               <div className="flex items-center border border-gray-300 rounded-lg p-2">
//                 <i className="fas fa-user text-gray-400"></i>
//                 <input
//                   type="text"
//                   id="fullName"
//                   placeholder="Full Name"
//                   className="flex-1 border-0 focus:ring-0 outline-none ml-2 text-gray-700"
//                 />
//               </div>
//             </div>

//             {/* Email Address */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
//                 Email Address<span className="text-red-500">*</span>
//               </label>
//               <div className="flex items-center border border-gray-300 rounded-lg p-2">
//                 <i className="fas fa-envelope text-gray-400"></i>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Email address"
//                   className="flex-1 border-0 focus:ring-0 outline-none ml-2 text-gray-700"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Subject */}
//           <div>
//             <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
//               Subject<span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-lg p-2">
//               <i className="fas fa-tag text-gray-400"></i>
//               <input
//                 type="text"
//                 id="subject"
//                 placeholder="Subject Line"
//                 className="flex-1 border-0 focus:ring-0 outline-none ml-2 text-gray-700"
//               />
//             </div>
//           </div>

//           {/* Message */}
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
//               Message<span className="text-red-500">*</span>
//             </label>
//             <textarea
//               id="message"
//               rows="5"
//               placeholder="Write message"
//               className="w-full border border-gray-300 rounded-lg p-3 focus:ring-0 outline-none text-gray-700"
//             ></textarea>
//           </div>

//           {/* Recaptcha */}
//           <div>
//             <div className="g-recaptcha" data-sitekey="your-site-key"></div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Contact Details Section */}
//       <div className="flex-1 bg-gray-900 text-white shadow-lg rounded-lg p-6 md:p-10 mt-6 md:mt-0 md:ml-6 flex flex-col justify-between">
//         <div>
//           <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
//           <ul className="space-y-6">
//             <li className="flex items-center">
//               <i className="fas fa-map-marker-alt text-orange-400 text-lg mr-4"></i>
//               <span>West-Uttara, Texas 1230, USA</span>
//             </li>
//             <li className="flex items-center">
//               <i className="fas fa-phone text-orange-400 text-lg mr-4"></i>
//               <span>+880123456789</span>
//             </li>
//             <li className="flex items-center">
//               <i className="fas fa-envelope text-orange-400 text-lg mr-4"></i>
//               <span>demo.support@gmail.com</span>
//             </li>
//           </ul>
//         </div>
//         <div className="mt-6 flex space-x-4">
//           <a href="#" className="text-white hover:text-orange-400">
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="#" className="text-white hover:text-orange-400">
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href="#" className="text-white hover:text-orange-400">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="#" className="text-white hover:text-orange-400">
//             <i className="fab fa-pinterest"></i>
//           </a>
//           <a href="#" className="text-white hover:text-orange-400">
//             <i className="fab fa-youtube"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;






import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post("https://arrc-tech-ratelab-backend-project.onrender.com/api/contact", formData);
      setSubmitMessage(response.data.message);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col mt-16 md:flex-row items-stretch justify-center bg-gradient-to-r from-white to-yellow-50 p-6 md:p-12">
      {/* Form Section */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-col">
        <form className="space-y-6 flex-grow" onSubmit={handleSubmit}>
          {/* Full Name and Email Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <i className="fas fa-user text-gray-400"></i>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  className="flex-1 border-0 focus:ring-0 outline-none ml-2 text-gray-700"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email Address<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <i className="fas fa-envelope text-gray-400"></i>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className="flex-1 border-0 focus:ring-0 outline-none ml-2 text-gray-700"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
              Subject<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <i className="fas fa-tag text-gray-400"></i>
              <input
                type="text"
                id="subject"
                placeholder="Subject Line"
                className="flex-1 border-0 focus:ring-0 outline-none ml-2 text-gray-700"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-0 outline-none text-gray-700"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Recaptcha */}
          <div>
            <div className="g-recaptcha" data-sitekey="your-site-key"></div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

          {submitMessage && (
            <div className={`text-center ${submitMessage.includes("error") ? "text-red-500" : "text-green-500"}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>

      {/* Contact Details Section */}
      <div className="flex-1 bg-gray-900 text-white shadow-lg rounded-lg p-6 md:p-10 mt-6 md:mt-0 md:ml-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <ul className="space-y-6">
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt text-orange-400 text-lg mr-4"></i>
              <span>West-Uttara, Texas 1230, USA</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone text-orange-400 text-lg mr-4"></i>
              <span>+880123456789</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope text-orange-400 text-lg mr-4"></i>
              <span>demo.support@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex space-x-4">
          <Link to="#" className="text-white hover:text-orange-400">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#" className="text-white hover:text-orange-400">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#" className="text-white hover:text-orange-400">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" className="text-white hover:text-orange-400">
            <i className="fab fa-pinterest"></i>
          </Link>
          <Link to="#" className="text-white hover:text-orange-400">
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

