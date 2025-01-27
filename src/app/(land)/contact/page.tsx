import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 text-gray-800 container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center mb-8">
          We welcome your questions, feedback, and collaboration inquiries. Please feel free to reach out to us using the contact information below. Whether you're interested in our project, have suggestions, or simply want to connect, we'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Vishal Pal --> */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Vishal Pal</h2>
            <p className="text-lg mb-2"><strong>Phone:</strong> +91 6387674208</p>
            <p className="text-lg mb-2"><strong>Email:</strong> vishalp9966@gamil.com</p>
            <p className="text-lg mb-2"><strong>GitHub:</strong> <a href="https://github.com/fvizpal" className="text-blue-500">github.com/fvizpal</a></p>
            <p className="text-lg"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/vishalpal-v96" className="text-blue-500">linkedin.com/in/vishalpal-v96</a></p>
          </div>

          {/* <!-- Aryan Jangid --> */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Aryan Jangid</h2>
            <p className="text-lg mb-2"><strong>Phone:</strong> +91 54321 09876</p>
            <p className="text-lg mb-2"><strong>Email:</strong> aryan.jangid@example.com</p>
            <p className="text-lg mb-2"><strong>GitHub:</strong> <a href="https://github.com/aryan-1309" className="text-blue-500">github.com/aryan-1309</a></p>
            <p className="text-lg"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/aryanjangid" className="text-blue-500">linkedin.com/in/aryanjangid</a></p>
          </div>

          {/* <!-- Mohammad Rehan --> */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Mohammad Rehan</h2>
            <p className="text-lg mb-2"><strong>Phone:</strong> +91 8470968029</p>
            <p className="text-lg mb-2"><strong>Email:</strong> mohammad.rehan@example.com</p>
            <p className="text-lg mb-2"><strong>GitHub:</strong> <a href="https://github.com/rehan313git" className="text-blue-500">github.com/rehan313git</a></p>
            <p className="text-lg"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/mohammadrehan" className="text-blue-500">linkedin.com/in/mohammadrehan</a></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page
