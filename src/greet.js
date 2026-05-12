function greet(name) {
  if (!name) throw new Error("Name is required");
  return `Hello, ${name}!`;
}

console.log("This is a test");
module.exports = { greet };
