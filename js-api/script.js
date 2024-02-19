// random-data-api.com/api/v2/users

console.log("inainte de apelare API");

// fetch("hhtps://random-data-api.com/api/v2/users?size=10").then((response)=>{
// Response.json().then((users)=> {
//     console.log(users)
// })
// })

fetchUsers();

console.log("Dupa apelare API");

async function fetchUsers() {
  const response = await fetch("https://random-data-api.com/api/v2/users?size=10");
  console.log(response);

  const users = await response.json();

  console.log(users);
  //   response.json().then((users) => {
  //     console.log(users);
  //   });
}
