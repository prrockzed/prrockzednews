"use client";

import React, { useEffect, useState } from "react";
import { Button, Row } from "antd";
import GridCard from "./gridCard";
import ListCard from "./listCard";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { NEWS_API_KEY } from "./apiKey";

const API_KEY = NEWS_API_KEY;
const API_URL = `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apiKey=${API_KEY}`;

function dashboard() {
  const [view, setView] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <>
      <div
        className="flex justify-center space-x-4 border-solid border-4 border-sky-400 rounded-lg py-2"
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <div className="dropdown inline-block relative">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">Dropdown</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className="">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                One
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Three is the magic number
              </a>
            </li>
          </ul>
        </div>
        {view ? (
          <>
            <Button
              size="large"
              onClick={() => setView(!view)}
              icon={<UnorderedListOutlined style={{ fontSize: "1.5rem" }} />}
            />
          </>
        ) : (
          <>
            <Button
              size="large"
              onClick={() => setView(!view)}
              icon={<AppstoreOutlined style={{ fontSize: "1.5rem" }} />}
            />
          </>
        )}
      </div>
      {articles.map((article) => (
        <div>
          {view ? (
            <div>
              <div>
                <ListCard news={article} />
              </div>
            </div>
          ) : (
            <div>
              <GridCard news={article} />
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default dashboard;
