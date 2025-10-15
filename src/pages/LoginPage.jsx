import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useNavigate } from "react-router-dom";
import Girl from '../assets/img/Girl.png';


export default function LoginPage() {
  const navigate = useNavigate();
  const [message, setmessage] = useState("");

  const handleSubmit = async (formData) => {
    await new Promise((res) => setTimeout(res, 2000));

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    console.log("User logged in:", { name, email, password });


    if (email && password) {
      setmessage("Login Successful");
      setTimeout(() => navigate("/MainSection"), 800)
    } else {
      setmessage("Invalid credentials")
    }
  };

  function CustomerForm() {
    const { pending } = useFormStatus();
    return (

      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          required
        />
        <button
          disabled={pending}
          className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${pending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-lg"
            }`}
        >
          {pending ? "Logging in..." : "Register"}
        </button>
      </div>



    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-[90%] max-w-5xl">

        {/* LEFT SIDE — Illustration */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-50 p-10">
          <img
            src={Girl}
            alt="illustration"
            className="w-72 mb-6"
          />
          <p className="text-gray-500 text-center font-medium">
            Welcome back! Please enter your details to continue.
          </p>
        </div>

        {/* RIGHT SIDE — Form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Create an account</h2>

          <form action={handleSubmit} className="flex flex-col gap-4">
            <CustomerForm />
          </form>

          {message && (
            <p className="mt-4 text-green-600 font-semibold">{message}</p>
          )}

          <div className="flex items-center gap-2 mt-6">
            <input type="checkbox" className="accent-purple-500" />
            <p className="text-gray-500 text-sm">
              By registering, you agree with our{" "}
              <span className="text-purple-600 font-medium">Terms</span> &{" "}
              <span className="text-purple-600 font-medium">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>




  );
}
