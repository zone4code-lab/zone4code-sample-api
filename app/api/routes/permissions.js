const PROTECTED_URLS = [
  ['/api/v1/user', 'POST', 'res:auth', 'scopes:write'],
  ['/api/v1/user(*)', 'GET', 'res:auth', 'scopes:read'],
  ['/api/v1/user(*)', 'PUT', 'res:auth', 'scopes:write'],
  ['/api/v1/role(*)', 'POST', 'res:auth', 'scopes:write'],
  ['/api/v1/role(*)', 'DELETE', 'res:auth', 'scopes:write'],
];

const NOT_PROTECTED = [
  '/healthy',
  '/favicon',
  '/api/v1/user/login',
  '/documentation(*)',
  '/',
  '/api/api-docs(*)',
  '/api/v1/list(*)',
  '/api/v1/field(*)',
  '/api/v1/step(*)',
  '/api/v1/workflow(*)',
  '/api/v1/area(*)',
  '/api/v1/type(*)',
  '/api/v1/tag(*)',
  '/api/v1/category(*)',
  '/api/v1/catField(*)',
];

export { PROTECTED_URLS, NOT_PROTECTED };
