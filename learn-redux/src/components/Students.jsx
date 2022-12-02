import React from "react";
import { useRef } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction, newUserAction } from "../store/actions/userActions";

function Students() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onDelete = (index) => {
    dispatch(deleteUserAction(index));
  };

  const onChange = (value) => {
    dispatch(newUserAction(value));
  };
  return (
    <div>
      <h1>Users</h1>

      <div>
        <Input onChange={onChange} getValueOnEnter></Input>
        <ul class="list-group">
          {users.map((user, index) => {
            return (
              <div
                key={index}
                class="list-group-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  {user.id}. {user.name}
                </p>
                <button
                  onClick={() => onDelete(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export { Students };
