import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="card bg-card max-w-md w-full p-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to bg-clip-text text-transparent mb-6 text-center">
          Sign Up
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-secondary mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="input"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-secondary mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-secondary mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="input"
            />
          </div>
          <button
            type="submit"
            className="btn bg-gradient-to-r from-btn-gradient-from to-btn-gradient-to text-white w-full font-bold text-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-secondary">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-brand-gradient-from hover:underline font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
