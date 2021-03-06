import Authentication from './authentication/api';
import Users from './management/api';

export default class Auth0 {
  constructor(domain) {
    if (domain == null) {
      throw new Error("must supply a valid Auth0 domain");
    }
    let baseUrl = domain
    if (!domain.startsWith("http")) {
      baseUrl = `https://${domain}`;
    }
    this.baseUrl = baseUrl
  }

  /**
   * Creates an Authentication API client
   * @param  {String} clientId
   * @return {AuthenticationAPI}
   */
  authentication(clientId) {
    return new Authentication(clientId, this.baseUrl);
  }

  /**
   * Creates a Users API client
   * @param  {String} token for Management API
   * @return {UsersAPI}
   */
  users(token) {
    return new Users(token, this.baseUrl);
  }
};
