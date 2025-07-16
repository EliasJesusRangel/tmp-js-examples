const am = async (a) => {
  console.log("first fetch", (await fetch("https://google.com")).ok);
  return fetch("https://google.com/search?foo").then((re) => {
    console.log("### SECOND FETCH COMPLETE");
    return re;
  });
};

const b = (a) => {
  return am(a);
};

const caller = async () => {
  console.log("### START");
  console.log((await b(2)).ok);

  console.log("### END");
  return "sooo";
};

caller()
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
