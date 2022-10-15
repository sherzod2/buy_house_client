const Api = (path, data) => {
  fetch(`http://localhost:7777/${path},${data}`);
};

export default Api;
