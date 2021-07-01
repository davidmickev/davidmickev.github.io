import fetch from 'node-fetch';

// import your GITHUB_TOKEN from another file(keep private).
import {secret_token,secret_token2} from './config.js';
// console.log(secret_token);

const variables = {
	githubToken: secret_token+secret_token2,
	githubLogin: 'davidmickev',
	//reposToFetch: 20

};

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

let githubData = (async () => { 
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(queryRepo),
		headers: headers
	});

	const json = await response.json();
	//githubData = json;

	//console.log(githubData.data.viewer.repositories.nodes);

  // for (var key in githubData.data.viewer.repositories.nodes) {
  //   console.log(key + " ---------------------");
  //   console.log(githubData.data.viewer.repositories.nodes[key]);
  // }

  // console.log(json.data.viewer.repositories.nodes);
  return json;
  
})();

export default githubData;

//console.log(githubData.data.viewer.repositories.nodes);

// function getIt(){(async () => { 
// 	const response = await fetch(url, {
// 		method: 'POST',
// 		body: JSON.stringify(queryRepo),
// 		headers: headers
// 	});

// 	var json = await response.json();
// 	githubData = json;

// 	//console.log(githubData.data.viewer.repositories.nodes);

//   // for (var key in githubData.data.viewer.repositories.nodes) {
//   //   console.log(key + " ---------------------");
//   //   console.log(githubData.data.viewer.repositories.nodes[key]);
//   // }

  
//   // for (var key in githubData.data.viewer.repositories.nodes) {
//   //     console.log(key + " ---------------------");
//   //     console.log(githubData.data.viewer.repositories.nodes[key]);
//   //   }

//   console.log(githubData.data.viewer.repositories.nodes);

//   //return githubData;
  
// })()};

// var v2 = getIt();
// //console.log(JSON.stringify(v2));
// console.log(JSON.stringify(v2, null, 4));
//console.log(v2.data.viewer.repositories.nodes);


