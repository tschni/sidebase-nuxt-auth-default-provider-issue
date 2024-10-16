import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: 'my-super-secret',
  providers: [
    {
      id: 'haeckerb2c',
      name: 'Häcker Küchen',
      type: 'oauth',
      wellKnown: 'https://id.haecker-kuechen.de/.well-known/openid-configuration',
      authorization: {
        params: { scope: 'openid offline_access' },
      },
      idToken: true,
      checks: ['pkce', 'state'],
      clientId: 'nobody-cares',
      clientSecret: 'nobody-cares',
      profile(profile) {
        return { id: profile.sub }
      },
    },
  ]
})

