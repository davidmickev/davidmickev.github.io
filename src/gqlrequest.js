import fetch from 'node-fetch';
// import your GITHUB_TOKEN from another file(keep private).
import {secret_token,secret_token2} from './config.js';

// const queryRepo = {
// 	query: `
//    query { 
//   user(login: "davidmickev") {
//     login
//     name
//     avatarUrl
//     bio
//     bioHTML
//   }
//   viewer {
//     repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false, orderBy: {field:NAME, direction:ASC}) {
//       pageInfo {hasNextPage, endCursor}
//       nodes {
//         name
//         description
//         url
//         forkCount
//         stargazerCount
//         updatedAt
//     
//         owner {
//           login
//         }
//         defaultBranchRef {
//           name

const variables = {
	githubToken: secret_token+secret_token2,
	githubLogin: 'davidmickev',
	//reposToFetch: 20

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
  return json.data.viewer.repositories.nodes;
})();

export default githubData;