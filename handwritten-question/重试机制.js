// 在编写请求接口的重试机制时，可以考虑以下几个步骤：
// 设置重试次数和间隔时间：确定接口请求失败后的重试次数和重试间隔时间。
// 编写请求函数：编写一个发送请求的函数，这个函数会发送HTTP请求，并返回一个Promise对象。
// 编写重试函数：编写一个重试函数，该函数会调用请求函数，并在请求失败时进行重试。
// 处理请求失败：在请求失败时，判断是否达到最大重试次数，如果未达到，则进行重试；如果已达到，则抛出错误或者返回失败的Promise。

function request(url, options = {}) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Response has occur error!');
    }
    return response.json();
  });
}


function requestWithRetry(
  url, options = {}, maxRetryTimes = 3, retryInterval = 1000
) {
  let retryTime = 0;
  return new Promise((res, rej) => {
    function retryRequest() {
      request(url, options).then(res).catch((err) => {
        console.error('Request has occur error!');
        if (retryTime < maxRetryTimes) {
          setTimeout(retryRequest, retryInterval);
          retryTime++;
        } else {
          rej(err);
        }

      });
    }
    retryRequest();
  });

}

const apiUrl = 'https://api.example.com/data';
const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

requestWithRetry(apiUrl, requestOptions)
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));