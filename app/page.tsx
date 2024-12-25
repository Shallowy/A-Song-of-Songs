'use client'
import React, { useState } from 'react';
import Chart1 from './chart1';
import Chart2 from './chart2';
import Heatmap from './heatmap';
import Radar from './radar';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>(''); // 管理搜索框的内容
  const [searchTerm, setSearchTerm] = useState<string>(''); // 存储传递给 Radar 的搜索内容

  // 处理搜索框内容的变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // 处理搜索按钮点击
  const handleSearch = () => {
    setSearchTerm(searchQuery); // 将输入的内容传递给 Radar 组件
  };

  return (
    <div className="container" style={{margin: "auto auto", width: "1000px", height: "600px"}}>
      <div style={{position: "absolute"}}><Chart2 /></div>
      <div><Heatmap /></div>
      {/* <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="请输入搜索内容"
          style={{ padding: '8px', width: '200px', border: '1px solid black', borderRadius: '4px' }}
        />
        <button onClick={handleSearch} style={{ 
          padding: '8px', 
          marginLeft: '10px', 
          borderRadius: '4px',
          backgroundColor: 'lightblue',
        }}>
          搜索
        </button>
      </div>

      <Radar searchQuery={searchTerm} /> */}
    </div>
  );
}