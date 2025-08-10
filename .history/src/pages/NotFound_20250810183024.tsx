import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          404
          <div className="text-sm text-gray-500 mt-1">４０４</div>
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Oops! Page not found
          <span className="block text-sm text-gray-500 mt-1">おっと！ページが見つかりません</span>
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
          <span className="block text-xs text-gray-500 mt-1">ホームに戻る</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
