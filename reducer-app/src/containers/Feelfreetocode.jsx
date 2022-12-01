import React, { useReducer, useRef } from "react";
import { useEffect } from "react";

function getInitialData() {
  console.log(JSON.parse(localStorage.getItem("feelfreetocode-data")));
  return JSON.parse(localStorage.getItem("feelfreetocode-data"));
}

const initialData = {
  domainName: "feelfreetocode.com",
  author: "virendra kuamr patel",
  students: [{ name: "Anish" }],
  courses: [
    {
      name: "React Js",
      id: Date.now(),
      lectures: [
        {
          name: "introduction",
        },
      ],
    },
  ],
};

const actions = {
  UPDATE_DOMAIN: "@feelfreetocode/update-domain",
  UPDATE_AUTHOR: "@feelfreetocode/update-author",
  ADD_COURSE: "@feelfreetocode/add-course",
  ADD_STUDENT: "@feelfreetocode/add-student",
  LOAD_DATA: "@feelfreetocode/load-data",
  ADD_LECTURE: "@feelfreetocode/add-lecture",
};
const feelfreetocodeReducer = (state, { type, payload }) => {
  console.log({ type, payload });

  if (type == actions.ADD_COURSE) {
    const name = payload.name;
    const courses = [...state.courses];
    courses.push({
      id: Date.now(),
      name,
      lectures: [],
    });
    const newState = {
      ...state,
      courses,
    };

    return newState;
  }

  if (type == actions.ADD_LECTURE) {
    const courses = [...state.courses];
    const updateCourseIndex = courses.findIndex((c) => c.id == payload.course);

    const updateCourse = { ...courses[updateCourseIndex] };
    updateCourse.lectures.push({
      id: Date.now(),
      name: payload.name,
    });

    courses[updateCourseIndex] = updateCourse;

    const newState = {
      ...state,
      courses,
    };
    return newState;
  }

  if (type == actions.UPDATE_DOMAIN) {
    const newState = {
      ...state,
    };
    newState.domainName = payload;
    return newState;
  }

  if (type == actions.LOAD_DATA) {
    const data = JSON.parse(localStorage.getItem("feelfreetocode-data"));
    return data;
  }

  if (type == actions.UPDATE_AUTHOR) {
    const newState = {
      ...state,
    };
    newState.author = payload;
    return newState;
  }
  return state;
};

export default function Feelfreetocode() {
  const courseNameRef = useRef();
  const courseSelectRef = useRef();
  const lectureInputRef = useRef();
  const [appData, dispatch] = useReducer(feelfreetocodeReducer, initialData);
  const isInitial = useRef(true);
  const { domainName, author, courses = [], students } = appData;

  useEffect(() => {
    if (appData != initialData) {
      localStorage.setItem("feelfreetocode-data", JSON.stringify(appData));
    }
  }, [appData]);

  useEffect(() => {
    dispatch({ type: actions.LOAD_DATA });
  }, []);

  const onUpdateDomain = ({ target: { value } }) => {
    dispatch({
      type: actions.UPDATE_DOMAIN,
      payload: value,
    });
  };

  const onAuthorUpdate = ({ target: { value } }) => {
    dispatch({
      type: actions.UPDATE_AUTHOR,
      payload: value,
    });
  };

  const onAddCourse = () => {
    const courseName = courseNameRef.current.value;

    dispatch({
      type: actions.ADD_COURSE,
      payload: {
        name: courseName,
      },
    });
  };
  const onAddLecture = () => {
    const lectureName = lectureInputRef.current.value;
    const course = courseSelectRef.current.value;

    dispatch({
      type: actions.ADD_LECTURE,
      payload: {
        name: lectureName,
        course,
      },
    });
  };

  // console.log({ author, courses, students, domainName });
  return (
    <div>
      <h1>
        {domainName} by {author}
      </h1>

      <div>
        UPDATE DOMAIN :{" "}
        <input
          onChange={onUpdateDomain}
          value={domainName}
          type="text"
          name=""
          id=""
        />
      </div>

      <div>
        UPDATE Author :{" "}
        <input onChange={onAuthorUpdate} value={author} type="text" />
      </div>

      <div className="row container">
        <div className="col">
          {/* Add course */}
          <div className="col border border-success p-2 m-2 rounded">
            Add Course
            <input type="text" ref={courseNameRef} placeholder="name" />
            <button onClick={onAddCourse}>Add Course</button>
          </div>

          {/* Add Lecture */}
          <div className="col border border-success p-2 m-2 rounded">
            <div>Add Lectures</div>
            <select ref={courseSelectRef}>
              {courses.map((course) => (
                <option value={course.id}>{course.name}</option>
              ))}
            </select>
            <input type="text" placeholder="name" ref={lectureInputRef} />
            <button onClick={onAddLecture}>Add Lecture</button>
          </div>
        </div>

        {/* Course list  */}
        <CourseList courses={courses}></CourseList>
      </div>
    </div>
  );
}

function CourseList({ courses }) {
  console.log(courses);
  return (
    <div className="col border border-success p-2 m-2 rounded">
      Courses List
      <ul>
        {courses.map(({ name, id, lectures }, index) => {
          return (
            <li key={index}>
              {name}
              <ul>
                {lectures.map(({ name }, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
