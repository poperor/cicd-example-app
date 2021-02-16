const core = require('@actions/core');
const github = require('@actions/github');
// throw(new Error("feila"));

try {
    const name = core.getInput('who-to-greet'); 

    console.log(`Hallo ${name}`);
    const time = new Date();
    core.setOutput("time", time.toTimeString())

    console.log(json.stringify(github, null, '\t'));
} catch (error) {
    core.setFailed("faila altså", error)
}