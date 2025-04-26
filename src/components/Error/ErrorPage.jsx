import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error); // optional

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!!</h1>
      <p className="text-lg text-gray-700 mb-2">
        {error.statusText || error.message || "Something went wrong!"}
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
      >
        Go Home
      </a>
    </div>
  );
}

export default ErrorPage;
