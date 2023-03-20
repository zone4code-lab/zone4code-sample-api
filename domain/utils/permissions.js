import UrlPattern from 'url-pattern';

class Permissions {
  constructor(permissions) {
    this.publicUrls = [];
    this.permissions = [];
    permissions.forEach((permission) => {
      const url = new UrlPattern(permission[0]);
      const method = permission[1].toUpperCase();
      const resource = permission[2];
      const scope = permission[3];

      this.permissions.push({
        url,
        method,
        resource,
        scope,
      });
    });
  }

  notProtect(...publicUrls) {
    publicUrls.forEach((url) => this.publicUrls.push(new UrlPattern(url)));

    return this;
  }

  findPermission(request) {
    return this.permissions.find((p) => request.method.toUpperCase() === p.method && p.url.match(request.originalUrl));
  }

  isNotProtectedUrl(request) {
    const { url } = request;
    const result = this.publicUrls.find((u) => u.match(url));

    return result !== undefined;
  }
}

export default Permissions;
