import React, { useState, useEffect } from "react";
import axios from "axios";

import { DeleteUser } from "./DeleteUser";

export const AdminUsers = () => {
  const [users, setUsers] = useState();
  const [deleteUsers, setDeleteUsers] = useState([]);

  useEffect(async () => {
    await axios
      .get("https://tucineya.herokuapp.com/api/users/")
      //.get("http://localhost:4000/api/users/")
      .then((res) => {
        setUsers(res.data[0]);
      });
  }, []);

  const onChangeCheck = (e) => {
    if (e.target.checked) {
      setDeleteUsers([...deleteUsers, e.target.value]);
    } else {
      for (let i = 0; i < deleteUsers.length; i++) {
        if (deleteUsers[i] === e.target.value) {
          deleteUsers.splice(i, 1);
          setDeleteUsers([...deleteUsers]);
        }
      }
    }
  };

  return (
    <div className="mb-3">
      <div>
        {users ? (
          <div className="overflow-auto d-flex container p-2">
            <ul className="list-group text-start">
              {users.map((user, i) => {
                return (
                  <li className="list-group-item" key={i}>
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value={user.mail}
                      aria-label="..."
                      onChange={onChangeCheck}
                    />
                    {user.nombre} {user.apellido}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div
            className="spinner-border text-primary d-flex justify-content-center"
            role="status"
          >
            <span className="visually-hidden ">Loading...</span>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center">
        {users ? (
          <DeleteUser
            deleteUsers={deleteUsers}
            setDeleteUsers={setDeleteUsers}
          />
        ) : null}
      </div>
    </div>
  );
};
