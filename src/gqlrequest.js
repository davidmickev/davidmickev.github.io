import fetch from 'node-fetch';
// import your GITHUB_TOKEN from another file(keep private).
import secret_token from './config.js';

const variables = {
	githubToken: secret_token,
	githubLogin: 'davidmickev',
};

const queryRepo = {
	query : `
  query { 
    viewer {
		repositories(first: 100, privacy: PUBLIC, ownerAffiliations: OWNER) {
		  totalCount
		  pageInfo {
			hasNextPage
			endCursor
		  }
		  nodes {
			  name
			  description
			  url
			  forkCount
        	  stargazerCount
			  languages(first: 5) {
				          nodes {
				            name
				          }
				        }
		  }
		}
	  }
}`
};

const url = 'https://api.github.com/graphql';
const headers = {
	'Content-type': 'application/json',
	Authorization: "bearer " + variables.githubToken
};

export const githubData = (async () => { 
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(queryRepo),
		headers: headers
	});
	const json = await response.json();

//console.log(json.data.viewer.repositories.nodes);
  return json;//.data.viewer.repositories.nodes;
})();

export default githubData;