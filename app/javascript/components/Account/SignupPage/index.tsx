import * as React from "react";

const SignupPage = () => (
  <div className="pt-10/100 px-10 xsm:px-20/100 sm:px-26/100 md:px-30/100 lg:px-32/100 xl:px-36/100">
    <div className="font-jakartasans">
      <h2 className="font-medium text-center text-3xl lg:text-4xl text-miru-1000 mb-5">
        Miru
      </h2>
      <div className="p-5 2xl:p-10 shadow-xl rounded-lg">
        <h2 className="text-miru-1000 lg:mb-3 text-base font-medium">
          Sign up
        </h2>

        <form>
          <div className="field">
            <label htmlFor="first_name" className="text-xs text-miru-1000">
              First Name
            </label>
            <br />
            <input
              type="text"
              className="h-8 w-full focus:outline-none bg-miru-200 text-sm"
              id="first_name"
            />
          </div>
          <div className="field">
            <label htmlFor="last_name" className="text-xs text-miru-1000">
              Last Name
            </label>
            <br />
            <input
              type="text"
              className="h-8 w-full focus:outline-none bg-miru-200 text-sm"
              id="last_name"
            />
          </div>
          <div className="field">
            <label htmlFor="email" className="text-xs text-miru-1000">
              Email
            </label>
            <br />
            <input
              type="email"
              className="h-8 w-full focus:outline-none bg-miru-200 text-sm"
              id="email"
            />
          </div>

          <div className="field">
            <label htmlFor="password" className="text-xs text-miru-1000">
              Password
            </label>
            <br />
            <input
              type="password"
              className="h-8 w-full focus:outline-none bg-miru-200 text-sm"
              id="password"
            />
          </div>

          <div className="field">
            <label
              htmlFor="password_confirmation"
              className="text-xs text-miru-1000"
            >
              Password Confirmation
            </label>
            <br />
            <input
              type="password"
              className="h-8 w-full focus:outline-none bg-miru-200 text-sm"
              id="password_confirmation"
            />
          </div>

          <div className="actions">
            <button
              type="submit"
              className="mt-5 h-8 w-full bg-miru-400 font-bold text-white text-base hover:bg-miru-1000"
            >
              Sign up
            </button>
          </div>

          <p className="m-3 text-xs text-miru-1000 text-center"> OR </p>

          <div>
            <button className=" h-8 w-full bg-miru-400 font-bold text-white text-base hover:bg-miru-1000">
              SIGN UP WITH GOOGLE
            </button>
          </div>
          <div>
            <button className="mt-5 h-8 w-full bg-miru-400 font-bold text-white text-base hover:bg-miru-1000">
              SIGN UP WITH APPLE
            </button>
          </div>
        </form>
        <div className="text-center m-2">
          <p className="text-center text-miru-400 text-xs hover:text-miru-1000">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SignupPage;