const users = [
  {
    name: "Korndanai",
    nickname: "Sky",
    hobby: "Listening to Music",
    salary: 35000,
    address: "My home",
    province: {
      province: "Bangkok",
      postcode: "10310",
    },
  },
  {
    name: "Jackery",
    nickname: "Jack",
    hobby: "Playing Games",
    address: "Montana",
    salary: 50000,
    province: { province: "Butte", postcode: "71053" },
  },
  {
    name: "Henry Chalk",
    nickname: "Hank",
    hobby: "Hiking",
    address: "The moon",
    salary: 68000,
    province: { province: "Frederick", postcode: "04513" },
  },
];

for (const user of users) {
  const {
    nickname,
    hobby,
    province: { postcode },
  } = user;
  console.log(`"My nickname is ${nickname}, My hobby is ${hobby}
and my postcode is ${postcode}"`);
}
