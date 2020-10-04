const host = 'chef-server.local';

export const environment = {
  production: true,

  restCookbooksListBaseURL: `https://${host}:8889/cookbooks`,
  restNodesListBaseURL: `https://${host}:8889/nodes`,
  restVersionBaseURL: `https://${host}:8889/version`
};
