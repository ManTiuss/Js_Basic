
const user = {
  name: "Volodimir",
  age: 28,
};

function increasedUser(user1) {
  const updateUserAge = Object.assign({}, user1);
  updateUserAge.age += 1;
  return updateUserAge;
}
const updateUserAge = increasedUser(user)
console.log(user.age)
console.log(updateUserAge.age)
