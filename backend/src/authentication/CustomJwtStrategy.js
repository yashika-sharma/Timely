const {JWTStrategy} = require('@feathersjs/authentication');
const {NotAuthenticated} = require('@feathersjs/errors');
const logger = require('../logger');

class CustomJwtStrategy extends JWTStrategy {
  async authenticate(authentication, params) {
    const {accessToken} = authentication;
    const {entity} = this.configuration;

    if (!accessToken) {
      throw new NotAuthenticated('No access token');
    }

    const payload = await this.authentication.verifyAccessToken(
      accessToken,
      params.jwt,
    );

    // If token type is refresh token then throw error
    if (payload.tokenType === 'refresh') {
      logger.info(`User (${payload.sub}) tried to access using refresh token`);
      throw new NotAuthenticated('Invalid access token');
    }

    const result = {
      accessToken,
      authentication: {
        strategy: 'jwt',
        accessToken,
        payload,
      },
    };

    if (entity === null) {
      return result;
    }

    const entityId = await this.getEntityId(result, params);
    const value = await this.getEntity(entityId, params);

    return {
      ...result,
      [entity]: value,
    };
  }
}

module.exports = CustomJwtStrategy;
