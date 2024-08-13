// async and await function
// async function is used to define an asynchronous function that returns a promise
// await function is used to pause the execution of the async function until the promise is resolved
// async function can contain multiple await function
// await function can only be used inside async function

const fetchData = () => {
  return setTimeout(() => {
    console.log("Data fetched");
  }, 2000);
};

 async function returnFetchData() {
  console.log("Fetching data...");
   await fetchData();
}

returnFetchData();
