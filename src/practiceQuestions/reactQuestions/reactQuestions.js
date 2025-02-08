import React, { useEffect, useState, useRef, useMemo } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import "./reactQuestions.css";
import { clear } from "@testing-library/user-event/dist/clear";

export default function ReactQuestions() {
  return (
    <div className="react-questions">
      <h2>Welcome to React Questions</h2>
      {/* <Counter /> */}
      {/* <Stopwatch /> */}
      {/* <DisplayDataUsingFetch /> */}
      {/* <DisplayDataUsingAxios /> */}
      {/* <DisplayDataWithPagination /> */}
      {/* <DisplayDataUsingMemo/> */}
      {/* <DisplayDataWithInfiniteScroll /> */}
      {/* <ShowCircleOnClick /> */}
      {/* <FollowingCircle /> */}
      {/* <DisplayDataInCard /> */}
      {/* <FolderUI data={data} /> */}
      {/* <PollManager /> */}
      {/* <ToDo /> */}
      {/* <ToDoList /> */}
      {/* <DependentDropdown /> */}
      {/* <TypeWriterEffect /> */}
      {/* <ModalPopup /> */}
      {/* <Debouncing /> */}
      {/* <Throttling /> */}
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

// Why Use useRef?

// 1. Persistent Storage Across Renders:

// Unlike regular variables, values stored in a useRef do not get reinitialized on every render.
// This means intervalIdRef.current retains the timer ID even as the component re-renders when time or isTimerRunning changes.

// 2. Avoiding Unnecessary State Updates:

// If we stored the timer ID in a useState instead, updating it would trigger a re-render of the component, which is unnecessary in this case.
// useRef allows us to hold a mutable value that doesn't trigger re-renders when updated.

// 3. Accessing DOM or Timer References:

// In this case, intervalIdRef is used to hold the ID of the timer created by setInterval. When handleResetTimer is called,
// clearInterval(intervalIdRef.current) uses this reference to stop the timer.

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
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("Fetched Data:", data);
        setDisplayData(data);
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [hasMore, setHasMore] = useState(true); // Check if more data is available

  const fetchData = async (pageNumber) => {
    setLoading(true);
    try {
      // API request with pagination
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          params: {
            _start: (pageNumber - 1) * itemsPerPage, // Start index for pagination
            _limit: itemsPerPage, // Limit number of items
          },
        }
      );

      // Filter out any items that are already in displayData (based on id)
      const uniqueNewItems = data.filter(
        (item) =>
          !displayData.some((existingItem) => existingItem.id === item.id)
      );

      // If there are unique items, append them to displayData
      if (uniqueNewItems.length > 0) {
        setDisplayData((prev) => [...prev, ...uniqueNewItems]);
      } else {
        setHasMore(false); // No more unique data available
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage); // Fetch data when the component mounts or currentPage changes
  }, [currentPage]);

  // Handle scroll event for the scrollable container
  const handleScroll = (event) => {
    const bottom =
      event.target.scrollHeight ===
      event.target.scrollTop + event.target.clientHeight;
    if (bottom && hasMore && !loading) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // handleScroll:

  // 1. event.target.scrollHeight
  // event.target refers to the element that is being scrolled (e.g., the container of the content).
  // scrollHeight is the total height of the content inside the scrollable container, including content that is not currently visible (i.e., the content that is scrolled out of view).
  // It includes the height of all the child elements and padding.
  // This value is fixed, regardless of the visible content or how much of the container is currently visible.

  // 2. event.target.scrollTop
  // scrollTop is the number of pixels that the content of the scrollable element is currently scrolled vertically from the top.
  // If the scroll position is at the very top, scrollTop is 0.
  // As you scroll down, scrollTop increases, indicating how far you've scrolled down.

  // 3. event.target.clientHeight
  // clientHeight is the visible height of the container.
  // This is the height of the scrollable element that is visible on the screen.
  // It excludes borders, margins, and scrollbars, showing only the visible area inside the element.

  return (
    <div
      style={{
        height: "560px", // Fixed height for the scrollable area
        overflowY: "auto", // Enable vertical scrolling
      }}
      onScroll={handleScroll} // Attach the scroll event listener to the scrollable container
    >
      {displayData.map((item) => (
        <div
          key={item.id}
          style={{
            margin: "10px 0",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        >
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

// ***********************************************************************************************************************************************************
// Q.5
// (A) WAP to generate a circle on click on the screen with a random radius & click point as center of the circle.
// (B) On clicking 2nd time a 2nd circle should generate with random radius. On clicking 3rd  time both circles should get disappear.
// (C) Check if both circle intersects or not.

function ShowCircleOnClick() {
  const [postion, setPosition] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [radius, setRadius] = useState({ r1: 0, r2: 0 });
  const [circleCount, setCircleCount] = useState(0);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const min = 20;
    const max = 100;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (circleCount === 0) {
      setCircleCount(1);
      setPosition((prev) => ({ ...prev, x1: x, y1: y }));
      setRadius((prev) => ({ ...prev, r1: randomNum }));
    } else if (circleCount === 1) {
      const x1 = postion.x1;
      const y1 = postion.y1;
      const r1 = radius.r1;

      const x2 = x;
      const y2 = y;
      const r2 = randomNum;

      setCircleCount(2);
      setPosition((prev) => ({ ...prev, x2, y2 }));
      setRadius((prev) => ({ ...prev, r2 }));

      // Calculate the distance b/w circles and check intersection
      //     // Formula:
      //     // distance between two circles = sqrt ( (x2​ − x1)^2   +  (y2 − y1​)^2 )
      //     // where (x1,y1) & (x2,y2) are the centers of the two circles.

      //     // conditon:
      //     // 1. If the distance between centers is less than or equal to the sum of the radii, the circles intersect.

      //     // distance <= r1+r2   => intersect

      //     // 2. If the distance is greater than the sum of the radii, they do not intersect.
      //     // distance > r1+r2   => do not intersect

      //     // For one circle to be completely inside the other, check if:
      //     // distance <= |r1-r2|

      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      const sumOfRadii = r1 + r2;

      console.log("Distance between centers:", distance);
      console.log("Sum of radii:", sumOfRadii);

      if (distance <= Math.max(r1, r2) - Math.min(r1, r2)) {
        console.log("One circle is inside another circle");
      } else if (distance <= sumOfRadii) {
        console.log("Circles are intersecting");
      } else {
        console.log("Circles are NOT intersecting");
      }
    } else {
      setCircleCount(0);
      setPosition({ x1: 0, y1: 0, x2: 0, y2: 0 });
      setRadius({ r1: 0, r2: 0 });
    }
  };

  return (
    <div className="full-screen" onClick={handleClick}>
      <div
        style={{
          marginTop: `${postion.y1 - radius.r1}px`,
          marginLeft: `${postion.x1 - radius.r1}px`,
          height: `${radius.r1 * 2}px`,
          width: `${radius.r1 * 2}px`,
          border: "solid 2px black",
          borderRadius: "50%",
          position: "absolute",
        }}
      />

      {(circleCount === 1 || circleCount === 2) && (
        <div
          style={{
            marginTop: `${postion.y2 - radius.r2}px`,
            marginLeft: `${postion.x2 - radius.r2}px`,
            height: `${radius.r2 * 2}px`,
            width: `${radius.r2 * 2}px`,
            border: "solid 2px black",
            borderRadius: "50%",
            position: "absolute",
          }}
        />
      )}
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.6 WAP to make a circle which will follow the cursor.

function FollowingCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const myThrottle = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handlePointer = myThrottle((e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, 20);

  return (
    <div className="full-screen" onMouseMove={(e) => handlePointer(e)}>
      <div
        style={{
          marginTop: `${position.y}px`,
          marginLeft: `${position.x}px`,
          height: "36px",
          width: "36px",
          border: "solid 2px red",
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
        }}
      />
    </div>
  );
}

// How to Implement Throttling in JavaScript:
// Create a Throttle Function: Define a function that takes a callback and delay to control execution frequency over time.
// Track Last Execution Time: Store the timestamp of the last function execution to calculate if the delay has passed.
// Check Time Interval: On each trigger, compare the current time with the last execution time; only execute if sufficient time passed.
// Return Throttled Function: Return a new function that runs the original callback only when the time interval condition is met.

// ***********************************************************************************************************************************************************
// Q.7 Fetch data from API and display data in cards.
// https://jsonplaceholder.org/users

function DisplayDataInCard() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    function getData() {
      axios
        .get("https://jsonplaceholder.org/users")
        .then((res) => setUserData(res.data))
        .catch((err) => console.log(err));
    }
    getData();
  }, []);

  return (
    <div className="full-screen">
      <div className="row mt-4">
        {userData.map((data) => {
          return (
            <div class="card col-md-2 ml-4 mb-3">
              <div class="card-body">
                <h5 class="card-title">{data.firstname}</h5>
                <p class="card-text">{data.lastname}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.8 Make an interactive UI to show folder structure. Prepare a JSON which will have folder structure of the data to be show on the UI.
// The UI should be dyanmic, ie, if some folders are added or deleted in the JSON then the UI should addapt it.

const data = {
  name: "Root Folder",
  isFolder: true,
  items: [
    {
      name: "Folder 1",
      isFolder: true,
      items: [
        {
          name: "Sub Folder 1.1",
          isFolder: true,
          items: [
            {
              name: "File 1.1",
              isFolder: false,
            },
            {
              name: "File 1.2",
              isFolder: false,
            },
            {
              name: "File 1.3",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "Folder 2",
      isFolder: true,
      items: [
        {
          name: "Sub Folder 2.1",
          isFolder: true,
          items: [
            {
              name: "File 2.1",
              isFolder: false,
            },
            {
              name: "File 2.2",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};

function FolderUI({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (data.isFolder) {
    return (
      <div>
        <div onClick={() => setIsExpanded(!isExpanded)}>{data.name}</div>

        <div
          style={{
            paddingLeft: "12px",
            display: isExpanded ? "block" : "none",
          }}
        >
          {data.items.map((item) => {
            return <FolderUI key={item.name} data={item} />;
          })}
        </div>
      </div>
    );
  } else
    return (
      <div>
        {data.name}
        <br />
      </div>
    );
}

// ***********************************************************************************************************************************************************
// Q.9 Create a Poll Manager which has two options and user is allowed to vote for one of them. Display the current status of Poll and
// show winner on click of 'Declare Winner' Button'.

// const poll = {
//   question: "Who is your favourite Superhero?",
//   pollOptions: ["Batman", "Superman", "Spiderman"],
// };

// function PollManager() {
//   const getInitialOptions = () => {
//     return poll?.pollOptions.map((option, index) => ({
//       id: index + 1,
//       name: option,
//       voteCount: 0,
//     }));
//   };

//   const [options, setOptions] = useState(getInitialOptions());

//   const [isWinnerDeclared, setIsWinnerDeclared] = useState(false);

//   const handleVote = (VotedOption) => {
//     const votedOptionId = VotedOption.id;

//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === votedOptionId
//           ? { ...option, voteCount: option.voteCount + 1 }
//           : option
//       )
//     );
//   };

//   const getpollStatus = () => {
//     const highestVoteCount = Math.max(...options.map((opt) => opt.voteCount));

//     const highestVoteCountOptions = options.filter(
//       (opt) => opt.voteCount === highestVoteCount
//     );

//     if (highestVoteCountOptions?.length === 1) {
//       return isWinnerDeclared
//         ? `${highestVoteCountOptions[0].name} won!!!`
//         : `${highestVoteCountOptions[0].name} is winning!`;
//     } else {
//       return `Its a tie between ${highestVoteCountOptions
//         .map((opt) => opt.name)
//         .slice(0, -1)} and ${
//         highestVoteCountOptions[highestVoteCountOptions.length - 1].name
//       }`;
//     }
//   };

//   return (
//     <div>
//       <h1>Poll Manager</h1>
//       <h2>{poll.question}</h2>

//       {options?.length > 0 &&
//         options.map((option) => {
//           return (
//             <div>
//               <div className="d-flex mt-4">
//                 <h2>{option.name}</h2>
//                 <button
//                   className="btn btn-primary ml-2"
//                   onClick={() => handleVote(option)}
//                 >
//                   Vote
//                 </button>
//               </div>
//             </div>
//           );
//         })}

//       {!isWinnerDeclared ? (
//         <div>
//           <h3>Poll status: {getpollStatus()}</h3>
//           <button
//             className="btn btn-success fs-5"
//             onClick={() => setIsWinnerDeclared(true)}
//           >
//             Declare Winner
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h3>Poll Winner: {getpollStatus()}</h3>
//           <button
//             className="btn btn-danger fs-5"
//             onClick={() => {
//               setOptions(getInitialOptions());
//               setIsWinnerDeclared(false);
//             }}
//           >
//             Reset Poll
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// ***********************************************************************************************************************************************************
// Q.10 Simple example of Routing.

// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function MyComponent() {
//   return <h1>My Component</h1>;
// }

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Home</Link> |<Link to="/about">About</Link> |
//         <Link to="/myComponent">My Component</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/myComponent" element={<MyComponent />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// ***********************************************************************************************************************************************************
// Q.11 (A) Create a To-Do using API

function ToDo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      setTodos(data.todos.splice(0, 10));
    }
    fetchData();
  }, []);

  const handleCheckbox = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <h1>To-Do Lists</h1>

      <ol>
        {todos?.map((todo) => (
          <div className="d-flex">
            <li key={todo.id}>{todo.todo}</li>
            <input
              type={"checkbox"}
              className="ml-2"
              checked={todo.completed}
              onChange={() => handleCheckbox(todo.id)}
            />
          </div>
        ))}
      </ol>
    </>
  );
}

// ***********************************************************************************************************************************************************
// Q.11 (B) Create a static To-Do List with add and remove taks functionality

function ToDoList() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([
    { text: "abc", inProgress: false },
  ]);

  const handleAddTask = () => {
    if (inputText) {
      setToDoList([...toDoList, { text: inputText, inProgress: false }]);
      setInputText("");
    }
  };

  const handleRemove = (index) => {
    const updatedToDoList = toDoList?.filter((_, i) => index !== i);
    setToDoList(updatedToDoList);
  };

  const handleCheckbox = (index) => {
    const updatedToDoList = toDoList?.map((todo, i) =>
      i === index ? { ...todo, inProgress: !toDoList.inProgress } : todo
    );
    setToDoList(updatedToDoList);
  };

  return (
    <div>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleAddTask}>Add task</button>

      <ol>
        {toDoList?.map((todo, index) => {
          return (
            <li>
              {todo.text}
              <input type="checkbox" onChange={() => handleCheckbox(index)} />
              <button onClick={() => handleRemove(index)}>Romove</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.12 Create two dropdowns- one will have country list another should have the states List based on the selected country.

function DependentDropdown() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const countryOptions = ["India", "USA", "Canada"];

  const stateOptions = useMemo(
    () => ({
      India: ["Delhi", "Mumbai", "Kolkata"],
      USA: ["New York", "California", "Texas"],
      Canada: ["Toronto", "Vancouver", "Montreal"],
    }),
    []
  );

  const availableStates = selectedCountry ? stateOptions[selectedCountry] : [];

  function handleCountryChange(selected) {
    setSelectedCountry(selected.value);
    setSelectedState(null);
  }

  return (
    <div className="container d-flex">
      <Dropdown
        className="form-control"
        options={countryOptions}
        onChange={(e) => handleCountryChange(e)}
        value={selectedCountry}
        placeholder="Select a Country"
      />

      <Dropdown
        className="form-control ml-2"
        options={availableStates}
        onChange={(selected) => setSelectedState(selected.value)}
        value={selectedState}
        placeholder="Select a State"
      />
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.13 Create an input feld. When we click on button then it should show entered text in typewriter style.

function TypeWriterEffect() {
  const [value, setValue] = useState("");
  const [printText, setPrintText] = useState("");

  const handlePrint = () => {
    let index = 0;
    const typeWriter = () => {
      if (index <= value.length) {
        setPrintText(value.slice(0, index));
        index++;
        setTimeout(typeWriter, 400);
      }
    };
    typeWriter();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handlePrint}>Print text</button>
      {printText}
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.14 Create a Modal popup which should appear on click of button and close on click of close button.

function ModalPopup() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button onClick={() => setShowPopup(true)}>Open Modal</button>

      {showPopup && (
        <div className="overlay">
          <div className="my-modal">
            <div className="modal-header">
              Modal Title
              <span className="close" onClick={() => setShowPopup(false)}>
                X
              </span>
            </div>
            <p>Modal content</p>
          </div>
        </div>
      )}
    </>
  );
}

// ***********************************************************************************************************************************************************
// Q.15 Understanding Debouncing

// Debouncing is a technique used to limit the frequency of function execution by ensuring that the function is only called after
// a specific delay has passed without the event being triggered again.

// In simple terms, debouncing makes sure that a function is only called once after a period of inactivity (i.e., after the event stops
// being triggered for a certain period of time).

// Debouncing is commonly used to optimize performance in situations where frequent events are triggered rapidly, and you don’t want the
// function to execute every time. A common use case is handling user input in search boxes, where you don't want an API call to be
// made with every keystroke.

// How Does Debouncing Work?
// When a debounced function is invoked, it starts a timer (set by a delay). If the function is called again before the timer expires
// (i.e., the event is triggered again), the timer is reset. The function is only executed when the event stops for the specified delay time.

// For example, if a user is typing in a search box and pressing keys rapidly, a debounced function will only run after the user stops typing
// for a set period of time, instead of running every time a key is pressed.

function Debouncing() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    // Cleanup: Clear the timer if inputValue changes before 500ms
    return () => clearTimeout(timerId);
  }, [inputValue]);

  useEffect(() => {
    if (debouncedValue) console.log("Call API");
  }, [debouncedValue]);

  return (
    <input
      placeholder="Type here"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

// ***********************************************************************************************************************************************************
// Q.16 Understanding Throttling

// Throttling is a technique used to limit the number of times a function can be executed over a period of time. It ensures that a
// function is called only once every X milliseconds, even if the event (like a button click or scroll) is triggered multiple times
// during that period.

// How Does Throttling Work?
// When throttling is applied to a function, it restricts the function to only be called once within a specific time interval, regardless
// of how many times the event that triggers the function occurs. If the event is triggered multiple times within the delay period, the
// function will only run once.

function Throttling() {
  const [lastCalled, setLastCalled] = useState(0);

  function myThrottle(func, delay) {
    return () => {
      let now = Date.now();

      if (now - lastCalled > delay) {
        func();
        setLastCalled(now);
      }
    };
  }

  const handleApiCall = () => {
    console.log("call API");
  };

  const thorttledApiCall = myThrottle(handleApiCall, 5000);

  return <button onClick={thorttledApiCall}>Call API</button>;
}
