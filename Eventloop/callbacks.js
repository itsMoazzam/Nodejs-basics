const f1 = (name, callback) => {
  console.log(`Hello ${name}`);
  callback();
};

f1(`Jhon`, () => {
  console.log(`This is the callback function ---->`);
});
