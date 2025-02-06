import git from "isomorphic-git";
import http from "isomorphic-git/http/node";

const url =
  "https://cors.isomorphic-git.org/github.com/isomorphic-git/isomorphic-git.git";
const gitResult = await git.getRemoteInfo({
  http,
  url,
});
console.log(gitResult);
