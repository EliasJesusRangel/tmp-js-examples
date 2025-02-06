const a = () => {
  throw new TypeError("A");
};
const b = () => {
  a();
};
const c = () => {
  try {
    b();
  } catch (err) {
    console.log("### ERROR CAUGHT IN C");
    console.log(err);
  }
};
c();
