const host = 'chef-server.local';

export const environment = {
  production: true,

  restCookbooksListBaseURL: `http://${host}:8889/cookbooks`,
  restNodesListBaseURL: `http://${host}:8889/nodes`,
  restVersionBaseURL: `http://${host}:8889/version`
};
