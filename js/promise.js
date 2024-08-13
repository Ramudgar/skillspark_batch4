// promise
const votePromise = new Promise((resolve, reject) => {
  let age = 20;
  if (age >= 18) {
    resolve("You are eligible for voting");
  } else {
    reject("You are not eligible for voting");
  }
});

votePromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
