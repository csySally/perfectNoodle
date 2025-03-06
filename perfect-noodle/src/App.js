import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">泡面神器</h1>
        <p className="text-gray-700">完美泡面的计时器应用</p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
          开始测试
        </button>
      </div>
    </div>
  );
}

export default App;
