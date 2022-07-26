const addUser = payload => ({
  type: 'ADD_USER',
  payload,
});

const deleteUser = () => ({
  type: 'DELETE_USER',
});

export {addUser, deleteUser};
