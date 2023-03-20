import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/slices/userSlice";
import { removeUser } from "./store/slices/userSlice";
import { editUser } from "./store/slices/userSlice";

const Form = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [uName, setUname] = useState("");
  const [passWord, setPassWord] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);

  const dispatch = useDispatch();
  const list = useSelector((state) => state.users.userData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstname: fName,
      lastname: lName,
      username: uName,
      password: passWord,
    };

    if (isEdit) {
      dispatch(editUser({ index: dataIndex, data: data }));
      setIsEdit(false);
      resetFields();
    } else {
      dispatch(addUser(data));
      resetFields();
    }
  };

  const handleEdit = (item, index) => {
    setFname(item?.firstname);
    setLname(item?.lastname);
    setUname(item?.username);
    setPassWord(item?.password);
    setIsEdit(true);
    setDataIndex(index);
  };

  const handleDelete = (index) => {
    dispatch(removeUser(index));
  };

  const resetFields = () => {
    setFname("");
    setLname("");
    setUname("");
    setPassWord("");
  };

  return (
    <div className="form-page">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>FirstName : </label>
        <input
          type="text"
          name="firstname"
          className="input"
          onChange={(e) => setFname(e.target.value)}
          value={fName}
        />
        <br />
        <br />

        <label>LastName : </label>
        <input
          type="text"
          name="lastname"
          className="input"
          onChange={(e) => setLname(e.target.value)}
          value={lName}
        />
        <br />
        <br />

        <label>UserName : </label>
        <input
          type="text"
          name="username"
          className="input"
          onChange={(e) => setUname(e.target.value)}
          value={uName}
        />
        <br />
        <br />

        <label>Password : </label>
        <input
          type="password"
          name="password"
          className="input"
          onChange={(e) => setPassWord(e.target.value)}
          value={passWord}
        />
        <br />
        <br />
        <button>{isEdit ? "Edit" : "Submit"}</button>
      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item?.firstname}</td>
                  <td>{item?.lastname}</td>
                  <td>{item?.username}</td>
                  <td>{item?.password}</td>
                  <td>
                    <button onClick={() => handleEdit(item, index)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
