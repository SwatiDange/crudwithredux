import {
  INSERTUSER,
  UPDATEUSER,
  DISPLAYUSER,
  FINDUSER,
  DELETEUSER,
} from "./actionType";

const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

const setUsersToLocalStorage = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const deleteData = () => ({
  type: DELETEUSER,
});

export const DeleteUserssCom = (id) => {
  return function (dispatch) {
    const users = getUsersFromLocalStorage();
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsersToLocalStorage(updatedUsers);
    dispatch(deleteData());
    dispatch(DisplayUserss());
  };
};

export const displayData = (users) => ({
  type: DISPLAYUSER,
  payload: users,
});

export const DisplayUserss = () => {
  return function (dispatch) {
    const users = getUsersFromLocalStorage();
    dispatch(displayData(users));
  };
};

export const addData = () => ({
  type: INSERTUSER,
});

export const AddUserss = (data) => {
  return function (dispatch) {
    const users = getUsersFromLocalStorage();
    users.push({ ...data, id: Date.now() }); 
    setUsersToLocalStorage(users);
    dispatch(addData());
    dispatch(DisplayUserss());
  };
};

export const updateData = () => ({
  type: UPDATEUSER,
});

export const UpdateUserss = (id, data) => {
  return function (dispatch) {
    const users = getUsersFromLocalStorage();
    const updatedUsers = users.map(
      (user) => (user.id === parseInt(id) ? { ...user, ...data } : user) 
    );
    setUsersToLocalStorage(updatedUsers); 
    dispatch(updateData());
    dispatch(DisplayUserss()); 
  };
};

export const findData = (user) => ({
  type: FINDUSER,
  payload: user,
});

export const findUserss = ({
  id,
  setName,
  setEmail,
  setPhone,
  setPassword,
}) => {
  return function (dispatch) {
    const users = getUsersFromLocalStorage();
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      dispatch(findData(user));
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setPassword(user.password);
    } else {
      console.error("User not found");
    }
  };
};
