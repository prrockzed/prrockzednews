"use client";

import React, { Fragment, useRef, useEffect, useState } from "react";
import { Button, Row } from "antd";
import GridCard from "./gridCard";
import ListCard from "./listCard";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { NEWS_API_KEY } from "./apiKey";

function dashboard() {
  const [view, setView] = useState(true);
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");

  const API_KEY = NEWS_API_KEY;
  const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=20&apiKey=${API_KEY}`;

  useEffect(() => {
    fetchNews();
  }, [country, category]);

  const fetchNews = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleCountryChange = (e: any) => {
    setCountry(e.target.value); // Update the selected country
  };

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value); // Update the selected category
  };

  return (
    <>
      <div
        className="flex space-x-4 mt-1 justify-between"
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <div className="relative w-full lg:max-w-sm">
          <select
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            onChange={handleCountryChange}
            value={country}
          >
            <option value="in">India</option>
            <option value="us">United States</option>
            <option value="ru">Russia</option>
            <option value="cn">China</option>
            <option value="gb">United Kingdom</option>
          </select>
        </div>

        <div className="relative w-full lg:max-w-sm">
          <select
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            onChange={handleCategoryChange}
            value={category}
          >
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          {view ? (
            <div className="justify-end">
              <Button
                size="large"
                onClick={() => setView(!view)}
                icon={<UnorderedListOutlined style={{ fontSize: "1.5rem" }} />}
              />
            </div>
          ) : (
            <div className="justify-end">
              <Button
                size="large"
                onClick={() => setView(!view)}
                icon={<AppstoreOutlined style={{ fontSize: "1.5rem" }} />}
              />
            </div>
          )}
        </div>
      </div>
      {articles.map((article, index) => (
        <div className="flex" key={index}>
          {view ? (
            <div>
              <ListCard news={article} />
            </div>
          ) : (
            <GridCard news={article} />
          )}
        </div>
      ))}
    </>
  );
}

export default dashboard;
