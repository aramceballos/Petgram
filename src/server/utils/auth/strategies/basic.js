import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { unauthorized } from '@hapi/boom';
import axios from 'axios';
require('dotenv').config();

passport.use(
  new BasicStrategy(async (email, password, done) => {
    try {
      const { data, status } = await axios({
        url: `${process.env.API_URL}/api/auth/sign-in`,
        method: 'POST',
        auth: {
          password,
          username: email,
        },
        data: {
          apiKeyToken: process.env.API_KEY_TOKEN,
        },
      });

      if (!data || status !== 200) {
        return done(unauthorized(), false);
      }

      return done(null, data);
    } catch (error) {
      done(error);
    }
  }),
);
