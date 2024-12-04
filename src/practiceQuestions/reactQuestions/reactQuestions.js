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
      {/* <DisplayDataUsingMemo/> */}
      <DisplayDataWithInfiniteScroll/>
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


// (B) Use React.memo for Child Components to prevent re-renders of list items unless the data changes.

const DisplayDataUsingMemo = () => {
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log("Fetched Data:", data);
        setDisplayData(data); // Fetch only the first 10 items
        // setDisplayData(data.slice(0, 10)); // Fetch only the first 10 items
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memoized list items to prevent unnecessary re-renders
  const DataList = React.memo(({ items }) => (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <span>ID: {item.id} - </span>
          <span>Title: {item.title}</span>
        </div>
      ))}
    </div>
  ));

  if (loading) return <div>Loading...</div>;
  if (!displayData.length) return <div>No data available</div>;

  return <DataList items={displayData} />;
};

// (C) Infinite Scrolling With Scrolling Behavior

const DisplayDataWithInfiniteScroll = () => {
  const [displayData, setDisplayData] = useState([]); // Store all fetched data
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const itemsPerPage = 10; // Number of items to fetch per page
  const [hasMore, setHasMore] = useState(true); // Check if more data is available

  // Fetch data from the API
  const fetchData = async (pageNumber) => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const start = (pageNumber - 1) * itemsPerPage;
      const end = pageNumber * itemsPerPage;

      const newData = data.slice(start, end);

      const newItems = newData.filter(
        (item) => !displayData.some((existingItem) => existingItem.id === item.id)
      );

      if (newItems.length > 0) {
        setDisplayData((prev) => [...prev, ...newItems]); // Append new data
      } else {
        setHasMore(false); // No more data to fetch
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
    console.log('window.innerHeight in useEff', window.innerHeight);
    console.log('document.documentElement.scrollTop in useEff', document.documentElement.scrollTop);
    console.log('document.documentElement.offsetHeight in useEff', document.documentElement.offsetHeight);
  }, [currentPage]);

  // Handle scroll event
  const handleScroll = () => {
    console.log('window.innerHeight in handleScroll', window.innerHeight);
    console.log('document.documentElement.scrollTop in handleScroll', document.documentElement.scrollTop);
    console.log('document.documentElement.offsetHeight in handleScroll', document.documentElement.offsetHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50 && // Trigger near the bottom
      hasMore &&
      !loading
    ) {
      setCurrentPage((prev) => prev + 1); // Load the next page
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <div>
      {displayData.map((item) => (
        <div key={item.id} style={{ margin: "10px 0", border: "1px solid #ddd", padding: "10px" }}>
          <span>ID: {item.id} - </span>
          <span>Title: {item.title}</span>
        </div>
      ))}
      {loading && <div>Loading...</div>}
      {!hasMore && <div>No more data to load</div>}
    </div>
  );
};


// Pros of Fetching in Small Batches (e.g., 10 items at a time):

// Reduced Initial Load Time: Fetching only the first few items ensures faster page loads, especially if the dataset is large.
// Better User Experience: Users get to see some content immediately without waiting for the entire dataset to load.
// Memory Efficiency: Limits the amount of data stored in memory, which can be crucial for resource-constrained devices.
// Dynamic Updates: You can fetch the most recent data every time the user scrolls or navigates, ensuring up-to-date content.

// Cons of Fetching in Small Batches:

// Increased API Calls: Frequent network requests increase server load and can lead to rate-limiting or higher costs for paid APIs.
// Latency Issues: Users might experience delays or interruptions if the next batch is slow to load.
// Dependency on Stable Internet: If a user loses their internet connection mid-scroll, they might not be able to access more data.
