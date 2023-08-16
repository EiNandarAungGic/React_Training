import React from "react";

export default function FormBody() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirm: "",
    terms: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match!");
    }

    if (formData.terms) {
      console.log("You agree to the terms and conditions");
    }
  }

  return (
    <div class="bg-purple-900">
      <div class="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          class="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        >
          <div class="mb-6">
            <label for="email" class="block text-gray-700 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={FormData.email}
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block text-gray-700 font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={FormData.password}
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="confirm-password"
              class="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={FormData.confirm}
              required
            />
          </div>
          <div class="mb-6">
            <label for="terms" class="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                class="mr-2"
                onChange={handleChange}
                checked={FormData.terms}
              />
              <span class="text-gray-700">
                I agree to the terms and conditions
              </span>
            </label>
          </div>
          <div class="mb-6">
            <button class="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
