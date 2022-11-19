const user = {
  name: "Korndanai",
  nickname: "Sky",
  hobby: "Listening to Music",
  salary: 35000,
  address: "My home",
  province: {
    province: "Bangkok",
    postcode: "10310",
  },
};

const showUserData = (user) => {
  const {
    nickname,
    hobby,
    province: { postcode },
  } = user;
  return `"My nickname is ${nickname}, My hobby is ${hobby}
and my postcode is ${postcode}"`;
};

console.log(showUserData(user));
