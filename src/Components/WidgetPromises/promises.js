const promise_1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        res('resolve promise_1')
      } else {
        rej('reject promise_1')
      }
    }, 1000)
  })
  .then(i => console.log(i))
  .catch(e => console.log(e))
};

const promise_2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        res('resolve promise_2')
      } else {
        rej('reject promise_2')
      }
    }, 2000)
  })
  .then(i => console.log(i))
  .catch(e => console.log(e))
};

const promise_3 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        res('resolve promise_3')
      } else {
        rej('reject promise_3')
      }
    }, 3000)
  })
  .then(i => console.log(i))
  .catch(e => console.log(e))
};

const promises = {promise_1, promise_2, promise_3};

export default promises;