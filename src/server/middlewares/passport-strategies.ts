import * as passport from 'passport';
import * as jwtStrategy from 'passport-jwt';
import * as PassportLocal from 'passport-local';
import config from '../config';
import type { IPayload } from '../utils/types';
import db from '../db';
import { comparePasswords } from '../utils/passwords';
import users from '../db/queries/users';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new jwtStrategy.Strategy({
    jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.auth.secret
}, async (payload: IPayload, done) => {
    try {
        const [user] = await db.users.find('id', payload.userid);
        if (user && user.banned !== 'y') {
            delete user.password;
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        console.log(error);
        done(error);
    }

}));

passport.use(new PassportLocal.Strategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const [user] = await db.users.find('email', email);
        if (user && comparePasswords(password, user.password)) {
            delete user.password;
            done(null, user);

        } else {
            done(null, false);

        }

    } catch (error) {
        console.log(error);
        done(error);

    }

}));