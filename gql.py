import requests
import json
import pprint

url = 'https://api.github.com/graphql'
json = { 'query' : '{ viewer { repositories(first: 100, privacy: PUBLIC, ownerAffiliations: OWNER) { totalCount pageInfo { hasNextPage endCursor } edges { node { name description url} } } } }' }
api_token = "YOURSECRET_TOKEN"
headers = {'Authorization': 'token %s' % api_token}

r = requests.post(url=url, json=json, headers=headers)
#pprint.pprint(r.json())

# If you want to save the json
f = open("gitinfo.json","w")
f.write(r.text)
f.close

# with open('./gitinfo.json') as x:
#   data = json.loads(x)

#print(data["data"]["viewer"]["repositories"]["edges"])

# for item in data["data"]["viewer"]["repositories"]["edges"]:
#   print(item)