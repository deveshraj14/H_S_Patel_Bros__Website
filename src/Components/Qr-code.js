// import React from "react";
// import { QRCodeCanvas } from "qrcode.react";

// export default function QrCode() {
//   const formSectionId = "form-section";
//   const currentUrl = window.location.origin + "/#" + formSectionId;

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
//       {/* Heading */}
//       <h1 className="text-3xl font-bold mb-6">QR Code Redirect Example</h1>

//       {/* QR Code Section */}
//       <div className="p-4 bg-white rounded-2xl shadow-md text-center">
//         <p className="mb-4 text-lg">Scan or click this QR code to go to the form:</p>

//         {/* Clickable QR Code */}
//         <a href={`#${formSectionId}`}>
//           <QRCodeCanvas value={currentUrl} size={180} includeMargin={true} />
//         </a>
//       </div>

//       {/* Spacer */}
//       <div className="h-96"></div>

//       {/* Form Section */}
//       <div id={formSectionId} className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg mt-20">
//         <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
//         <form className="flex flex-col space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             className="p-3 border rounded-lg"
//             rows="4"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
