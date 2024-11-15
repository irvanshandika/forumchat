/* eslint-disable @typescript-eslint/no-explicit-any */
import * as auth from '$lib/server/auth';
import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './lucia/$types';

export const load: PageServerLoad = async (event: { locals: { user: any; }; }) => {
	if (!event.locals.user) {
		return redirect(302, '/auth/signin');
	}
	return { user: event.locals.user };
};

export const actions: Actions = {
	logout: async (event: RequestEvent<Partial<Record<string, string>>, string | null>) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/auth/signin');
	},
};
