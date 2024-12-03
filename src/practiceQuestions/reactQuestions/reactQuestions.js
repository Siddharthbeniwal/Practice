import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./reactQuestions.css";

const block = "react-questions";
export default function ReactQuestions() {
  return (
    <div className={block}>
      <h2>Welcome to React Questions</h2>
      {/* <Counter /> */}
      {/* <Stopwatch /> */}
      {/* <DisplayDataUsingFetch /> */}
      {/* <DisplayDataUsingAxios /> */}
      {/* <DisplayDataWithPagination /> */}
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.1 Create a counter.

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.2 Create a stopwatch.

function Stopwatch() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  let intervalIdRef = useRef(null);

  const updateTime = () => {
    setTime((prevTime) => {
      let { hr, min, sec } = prevTime;

      sec += 1;
      if (sec === 60) {
        sec = 0;
        min += 1;
      }
      if (min === 60) {
        min = 0;
        hr += 1;
      }

      return { hr, min, sec };
    });
  };

  const handleStartTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      intervalIdRef.current = setInterval(updateTime, 1000);
    }
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
    clearInterval(intervalIdRef.current);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    clearInterval(intervalIdRef.current);
    setTime({ hr: 0, min: 0, sec: 0 });
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>
        {String(time.hr).padStart(2, "0")}:{String(time.min).padStart(2, "0")}:
        {String(time.sec).padStart(2, "0")}
      </h2>
      <button
        className="btn btn-info"
        onClick={isTimerRunning ? handlePauseTimer : handleStartTimer}
      >
        {isTimerRunning ? "Pause" : "Start"}
      </button>
      <button className="btn btn-danger ml-4" onClick={handleResetTimer}>
        Reset
      </button>
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.3(A) Fetch and display data on the UI data from a get API using 'fetch'.

function DisplayDataUsingFetch() {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setDisplayData(data);
      } catch (err) {
        console.log("Error fetching data:", err);
        throw new Error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data:</h1>
      {displayData?.length > 0 ? (
        displayData.map((item) => (
          <div key={item.id}>
            <span>ID: {item.id} - </span>
            <span>Title: {item.title}</span>
          </div>
        ))
      ) : (
        <p>No Data available</p>
      )}
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.3(B) Fetch and display data on the UI data from a get API using 'axios'.

function DisplayDataUsingAxios() {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log("res", res);
          setDisplayData(res.data);
        })
        .catch((err) => {
          console.log("error fethcing data", err);
          throw new Error(err);
        });
    }

    fetchData();
  }, []);

  return (
    <div>
      {displayData?.length > 0 ? (
        <div>
          {displayData.map((item) => (
            <div key={item.id}>
              <span>ID: {item.id} - </span>
              <span>Title: {item.title}</span>
            </div>
          ))}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.4 In Question 3, how can you optimize the performance?

// (A) Pagination- Display data in smaller chunks by breaking it into pages.
function DisplayDataWithPagination() {
  const [displayData, setDisplayData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    function fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setDisplayData(res.data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }

    fetchData();
  }, []);

  const paginatedData = displayData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(displayData.length / itemsPerPage);

  return (
    <div>
      {paginatedData.map((item) => (
        <div key={item.id}>
          <span>ID: {item.id} - </span>
          <span>Title: {item.title}</span>
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
