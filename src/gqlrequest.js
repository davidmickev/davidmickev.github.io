import fetch from 'node-fetch';

// import your GITHUB_TOKEN from another file(keep private).
import secret_token from './config.js';

console.log(secret_token);

const variables = {
	githubToken: secret_token,
	githubLogin: 'davidmickev'
	//reposToFetch: 20
};

//var fetch = require('node-fetch');

const queryRepo = {
	query: `
   query { 
  user(login: "davidmickev") {
    login
    name
    avatarUrl
    bio
    bioHTML
  }
  viewer {
    repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false, orderBy: {field:NAME, direction:ASC}) {
      pageInfo {hasNextPage, endCursor}
      nodes {
        name
        description
        url
        forkCount
        stargazerCount
        updatedAt
        languages(first: 5) {
          nodes {
            name
          }
        }
        owner {
          login
        }
        defaultBranchRef {
          name
        }
      }
    }
  }
 } `
};
const url = 'https://api.github.com/graphql';
const headers = {
	'Content-type': 'application/json',
	Authorization: "bearer " + variables.githubToken
};
var githubData;

(async () => { 
	//const body = {a: 1};

	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(queryRepo),
		headers: headers
	});
	const json = await response.json();
	githubData = json;

	console.log(json.data.viewer.repositories.nodes);
})();