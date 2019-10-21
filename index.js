const child = require("child_process");
const fs = require("fs");

const output = child
  .execSync(`git log --format=%B%H----DELIMITER----`)
  .toString("utf-8");

const commitsArray = output
  .split("----DELIMITER----\n")
  .map(commit => {
    const [message, sha] = commit.split("\n");

    return { sha, message };
  })
  .filter(commit => Boolean(commit.sha));

// const currentChangelog = fs.readFileSync("./CHANGELOG.md", "utf-8");
// const currentVersion = Number(require("./package.json").version);
// const newVersion = currentVersion + 1;
// let newChangelog = `# Version ${newVersion} (${
//   new Date().toISOString().split("T")[0]
// })\n\n`;
//
// const features = [];
// const chores = [];
//
// commitsArray.forEach(commit => {
//   if (commit.message.startsWith("feature: ")) {
//     features.push(
//       `* ${commit.message.replace("feature: ", "")} ([${commit.sha.substring(
//         0,
//         6
//       )}](https://github.com/jackyef/changelog-generator/commit/${
//         commit.sha
//       }))\n`
//     );
//   }
//   if (commit.message.startsWith("chore: ")) {
//     chores.push(
//       `* ${commit.message.replace("chore: ", "")} ([${commit.sha.substring(
//         0,
//         6
//       )}](https://github.com/jackyef/changelog-generator/commit/${
//         commit.sha
//       }))\n`
//     );
//   }
// });
//
// if (features.length) {
//   newChangelog += `## Features\n`;
//   features.forEach(feature => {
//     newChangelog += feature;
//   });
//   newChangelog += '\n';
// }
//
// if (chores.length) {
//   newChangelog += `## Chores\n`;
//   chores.forEach(chore => {
//     newChangelog += chore;
//   });
//   newChangelog += '\n';
// }
//
// // prepend the newChangelog to the current one
// fs.writeFileSync("./CHANGELOG.md", `${newChangelog}${currentChangelog}`);
