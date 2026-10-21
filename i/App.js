import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Hàm chuyển đổi trạng thái theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Cấu hình màu sắc giao diện dựa vào state
  const themeStyle = {
    backgroundColor: isDarkMode ? '#222' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    padding: '30px',
    borderRadius: '8px',
    minHeight: '100vh',
    transition: 'all 0.3s ease', // Hiệu ứng chuyển màu mượt mà
  };
  return (
    <form>
      <h1>Thêm sinh viên</h1>
      <button 
          type="button" 
          onClick={toggleTheme}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            marginBottom: '20px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: isDarkMode ? '#444' : '#f0f0f0',
            color: isDarkMode ? '#fff' : '#000'
          }}
        >
          {isDarkMode ? 'Chế độ Sáng (Light)' : 'Chế độ Tối (Dark)'}
        </button>
      <p>
        Họ tên: <input type="text" placeholder="Nhập họ tên" />
      </p>
      <p>
        Email: <input type="email" placeholder="Nhập email" />
      </p>
      <p>
        Ngành: <input type="text" placeholder="Nhập ngành" />
      </p>
      <p>
        <button type="submit">Thêm</button>
      </p>
      <p>Trần Bình Hòa-ATTT<span><button type="reset">[Xóa]</button></span></p>
      <p>Lê Văn Cường-CNTT<span><button type="reset">[Xóa]</button></span></p>
    </form>
  );
}

export default App;
