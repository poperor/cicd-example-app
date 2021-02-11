module.exports = {
   branches: "master", 
   repositoryUrl: "https://github.com/poperor/cicd-example-app",
   plugins: [
       "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"]
}