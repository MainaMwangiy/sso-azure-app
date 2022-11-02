import {  LoginType } from 'react-aad-msal';
import { AUTHORITY, CLIENT_ID, REDIRECT_URI } from './components/constants';
 
// Msal Configurations
export const config = {
  auth: {
    authority: AUTHORITY,
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
// Authentication Parameters
export const authenticationParameters = {
  scopes: [
    'admin.create'
  ]
}
 
// Options
export const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
}
 
