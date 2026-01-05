import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Project: a
    .model({
      name: a.string().required(),
      description: a.string(),
      status: a.enum(['ejecucion', 'completado', 'revision', 'pausa']),
      startDate: a.date(),
      endDate: a.date(),
    })
    .authorization((allow) => [allow.authenticated()]), // 🔒 Solo permite acceso si hay login
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool', // 🔑 Activa el Login de usuario como modo principal
  },
});