"use client";
import { useState } from "react";
const departments = [
  "-Select-",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electronics and Telecommunication",
  "Information Technology",
  "Computer Engineering",
];
const graduation_years = ["-Select-", "2026", "2027", "2028", "2029", "2030"];

const SignUp = () => {
  const [user, setUser] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    console.log(name);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setUser(user + 1);
    e.currentTarget.reset();
  };
  return (
    <>
      <div className="bg-green-500 h-auto">
        <div className="flex justify-center">
          <span className="text-center text-3xl mt-3 font-bold font-sans text-slate-800">
            Registration
          </span>
        </div>
        <div>
          <form className="h-full m-8 rounded-xl" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:grow-0 sm:m-3 p-3 border-b-2 border-gray-200">
              <div className="w-full sm:w-1/3 sm:h-auto text-center">
                Personal Information
              </div>
              <div className="w-full flex flex-wrap md:w-2/3">
                <div className="flex flex-col sm:flex-row w-full flex-wrap">
                  <div className=" grow sm:grow-0 md:w-1/2 lg:w-1/3 px-2">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        autoComplete="text"
                        required
                        className="w-full  border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div className="grow sm:grow-0  md:w-1/2 lg:w-1/3 px-2">
                    <label
                      htmlFor="middle_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Middle Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="middle_name"
                        name="middle_name"
                        type="text"
                        autoComplete="text"
                        required
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div className=" grow sm:grow-0 md:w-1/2 lg:w-1/3 px-2">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        autoComplete="text"
                        required
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-2/3 md:grow-0 lg:w-1/2 px-2">
                  <label
                    htmlFor="email"
                    className="col-span-1 block text-sm font-medium text-gray-700 text-left m-3"
                  >
                    Email address
                  </label>
                  <div className="mt-6 col-span-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-2/3 md:grow-0 lg:w-1/2 px-2">
                  <label
                    htmlFor="mobile"
                    className="w-full block text-sm font-medium text-gray-700 m-3 text-left"
                  >
                    Mobile no.
                  </label>
                  <div className="mt-6 col-span-1">
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="mobile"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-2/3 md:grow-0 lg:w-1/2 px-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 m-3 text-left"
                  >
                    Password
                  </label>
                  <div className="mt-6">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-2/3 md:grow-0 lg:w-1/2 px-2">
                  <label
                    htmlFor="confirm_password"
                    className="block text-sm font-medium text-gray-700 m-3 text-left"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-6">
                    <input
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      autoComplete="password"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:grow-0 sm:m-3 p-3 border-b-2 border-gray-200">
              <div className="w-full sm:w-1/3 sm:h-auto text-center">
                Academic Details
              </div>
              <div className="w-full flex flex-wrap sm:w-2/3">
                <div className="w-full md:grow-0 sm:w-1/2 px-2">
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700 m-3 text-left col-span-1"
                  >
                    Department
                  </label>
                  <div className="mt-6">
                    <select
                      name="department"
                      id="department"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      {departments.map((department) => {
                        return <option key={department}>{department}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-full md:grow-0 sm:w-1/2 px-2">
                  <label
                    htmlFor="graduation"
                    className="block text-sm font-medium text-gray-700 m-3 text-left col-span-1"
                  >
                    Graduation Year
                  </label>
                  <div className="mt-6">
                    <select
                      name="graduation_year"
                      id="graduation_year"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      {graduation_years.map((graduation_year) => {
                        return (
                          <option key={graduation_year}>
                            {graduation_year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col md:flex-row md:grow-0 sm:m-3 p-3 border-b-2 border-gray-200">
              <div className="w-full sm:w-1/3 sm:h-auto text-center">
                Technical Skills
              </div>
              <div className="w-full flex flex-wrap sm:w-2/3">
                <div className="w-full md:grow-0 sm:w-1/2 px-2">
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700 m-3 text-left col-span-1"
                  >
                    Domain
                  </label>
                  <div className="mt-6">
                    <select
                      name="department"
                      id="department"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="None">-Select-</option>
                      <option value="WebDev">Web Development</option>
                      <option value="Android">Android Development</option>
                      <option value="Cloud">Cloud Computing</option>
                      <option value="ML ">Machine Learning</option>
                    </select>
                  </div>
                </div>
                <div className="w-full md:grow-0 sm:w-1/2 px-2">
                  <label
                    htmlFor="graduation"
                    className="block text-sm font-medium text-gray-700 m-3 text-left col-span-1"
                  >
                    Category
                  </label>
                  <div className="mt-6">
                    <select
                      name="department"
                      id="department"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="None">-Select-</option>
                      <option value="Front-end">Front-end</option>
                      <option value="Back-end">Back-end</option>
                      <option value="Full-stack">Full-stack</option>
                    </select>
                  </div>
                </div>
                <div className="w-full md:grow-0 sm:w-1/2 px-2">
                  <label
                    htmlFor="graduation"
                    className="block text-sm font-medium text-gray-700 m-3 text-left col-span-1"
                  >
                    Proficiency Level
                  </label>
                  <div className="mt-6">
                    <select
                      name="department"
                      id="department"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="None">-Select-</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
            </div> */}
            <button type="submit" className="p-2 border border-black bg-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
