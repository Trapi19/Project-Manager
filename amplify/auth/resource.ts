import { defineAuth } from '@aws-amplify/backend';
import { preSignUp } from '../functions/pre-sign-up/resource';

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    preSignUp
  }
});
import { defineAuth } from '@aws-amplify/backend';
import { preSignUp } from '../functions/pre-sign-up/resource';

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    preSignUp
  }
});