const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw(new Error("feila"));
  core.debug("Debug message by poperor");
  core.warning("Warning message by poperor");
  core.error("Error message by poperor");
  const name = core.getInput("who-to-greet");
  core.setSecret(name);
  console.log(`Hallo ${name}`);
  const time = new Date();
  core.setOutput("time", time.toTimeString());
  core.startGroup("Logging github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();
  core.exportVariable("POP_HELLO", "Hallo fra poperor");
} catch (error) {
  core.setFailed("faila altså", error.message);
}
