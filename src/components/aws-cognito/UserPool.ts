import { CognitoUserPool, ICognitoUserPoolData } from 'amazon-cognito-identity-js';
import { environment } from '@/constants/environment';

if (!environment.USER_POOL_ID || !environment.CLIENT_ID) {
  throw new Error("Missing essential environment variables: USER_POOL_ID or CLIENT_ID");
}

const poolData: ICognitoUserPoolData = {
  UserPoolId: environment.USER_POOL_ID,
  ClientId: environment.CLIENT_ID,
};

const UserPool = new CognitoUserPool(poolData);

export default UserPool;
