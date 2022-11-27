console.log("Wellcome to the world of callbacks");

function sendEmail(email, message, callback) {
  console.log("Sending email...");
  setTimeout(() => {
    // console.log(
    //   `To ${email}

    // ${message}

    // Regards and thanks.
    // `
    // );
    callback(true);
  }, 4000);
}

const task2 = (callback) => {
  console.log("Doning task 2..");
  setTimeout(() => {
    callback();
  }, 4000);
};

const task3 = () => {
  console.log("doing task 3");
};

const afterEmail = (feedback) => {
  if (feedback) {
    console.log("Email sent Sucessfully");
    task2(task3);
  } else {
    console.log("Email Failed..");
  }
};

// sendEmail(
//   "patelvirendra62@gmail.com",
//   `Hi ,

//     Hope you are doing good.
//     I am also good.
// `,
//   afterEmail
// );

console.clear();

// function getStudents() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Got the students");
//       resolve([1, 2, 4]);
//     }, 4000);
//   });
// }

// getStudents().then((result) => {
//   console.log({ result });
// });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
