import history from '../../history';
import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    connection: 'Username-Password-Authentication',
    audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile email', // add profile in the scope
  });

  constructor() {
    // this.changePassword = this.changePassword.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.userHasAccess = this.userHasAccess.bind(this);
  }

  // changePassword(){
  //   this.auth0.changePassword({
  //     connection: 'CONNECTION',
  //     email:   'EMAIL'
  //   })
  // }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      // console.log(authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        // history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    if (authResult.idTokenPayload['http://localhost:3000/user_metadata']) {
      localStorage.setItem('userType', authResult.idTokenPayload['http://localhost:3000/user_metadata'].type);
      localStorage.setItem('userId', authResult.idTokenPayload['http://localhost:3000/user_metadata'].id);
      localStorage.setItem('email', authResult.idTokenPayload['http://localhost:3000/user_metadata'].email);

      let loginUserType = authResult.idTokenPayload['http://localhost:3000/user_metadata'].type;
      if (loginUserType === 'carer') {
        history.replace('/portal-carer/dashboard');
      }
      if (loginUserType === 'client') {
        history.replace('/portal-client/dashboard');
      }
      if (loginUserType === 'admin') {
        history.replace('/portal-admin/visits');
      }
    } else {
      history.replace('/');
    }
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.clear();
    // navigate to the home route
    history.replace('/');
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  getUserId() {
    // Get user id throughout the application
    if (this.isAuthenticated()) {
      return localStorage.getItem('userId');
    }
  }

  getUserName() {
    // Get user id throughout the application
    if (this.isAuthenticated()) {
      return localStorage.getItem('name');
    }
  }
  
  getEmail() {
    // Get user id throughout the application
    if (this.isAuthenticated()) {
      return localStorage.getItem('email');
    }
  }
  isAuthenticated() {
    // Check whether the current time is past the access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  userHasAccess(userType) {
    // check the path user tried to access is authorized or not
    const userAccess = localStorage.getItem('userType');
    if (userAccess) {
      return userType.every((type) => userAccess.includes(type));
    }
    return false;
  }
}
