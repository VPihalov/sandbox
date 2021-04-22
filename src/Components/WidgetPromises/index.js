import promises from './promises';
import fetchMock from 'fetch-mock';

const WidgetPromises = () => {
  // console.log(`promise_1`, promise_1());
  // const {promise_1, promise_2, promise_3} = promises;
  // promise_1()

  // fetchMock.get('http://fake-1.org', {random: (() => {
  //   if (Math.random() > 0.5) {
  //     return 'resolved'
  //   } else {
  //     return 'failed'
  //   }
  // })()}, {
  //   delay: 1000,
  //   overwriteRoutes: false 
  // });

  // fetchMock.get('http://fake-2.org', {random: (() => {
  //   if (Math.random() > 0.5) {
  //     return 'resolved'
  //   } else {
  //     return 'failed'
  //   }
  // })()}, {
  //   delay: 4000,
  //   overwriteRoutes: false 
  // });

  // fetchMock.get('http://fake-3.org', {random: (() => {
  //   if (Math.random() > 0.5) {
  //     return 'resolved'
  //   } else {
  //     return 'failed'
  //   }
  // })()}, {
  //   delay: 2500,
  //   overwriteRoutes: false 
  // });

  const clickHandler = () => {
    // const urls = ['http://fake-1.org', 'http://fake-2.org', 'http://fake-3.org'];
    const urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://no-such-url'];
    // for (let i = 0; i < urls.length; i++) {
    //   promises.push(fetch(urls[i]));
    // };
    // Promise.allSettled(promises).then(z => console.log("All Done ", z));
    Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => console.log(`All done with results:`, results))
  };

  return (
    <div className="App">
      <div>Console.log('all Done') when all promises are fullfilled</div>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
};

export default WidgetPromises;