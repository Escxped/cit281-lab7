class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwGenericError() {
  throw new Error("Generic error");
}

function throwCustomError() {
  throw new CustomError("Custom error");
}

try {
  console.log("Attempting to throw generic error...");
  throwGenericError();
} catch (err) {
  console.log(`Caught an error: ${err.name} - ${err.message}`);
} finally {
  console.log("Finished generic error block.");
}

try {
  console.log("Attempting to throw custom error...");
  throwCustomError();
} catch (err) {
  console.log(`Caught an error: ${err.name} - ${err.message}`);
} finally {
  console.log("Finished custom error block.");
}
