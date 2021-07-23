export const getLocalStorage = () => {
  let list = localStorage.getItem('links');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
