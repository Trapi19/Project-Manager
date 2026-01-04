import type { PreSignUpTriggerHandler } from 'aws-lambda';

export const handler: PreSignUpTriggerHandler = async (event) => {
  const email = event.request.userAttributes['email'];

  if (!email.endsWith('@unitecnic.com')) {
    throw new Error('Acceso denegado: Solo se permiten correos de @unitecnic.com');
  }

  return event;
};