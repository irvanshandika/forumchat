/* eslint-disable @typescript-eslint/no-unused-vars */
import { hash } from "@node-rs/argon2";
import { encodeBase32LowerCase } from "@oslojs/encoding";
import { fail, redirect } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import * as table from "$lib/server/db/schema";
import type { Actions } from "./$types";

export const actions: Actions = {
  register: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    const name = formData.get("name");
    const email = formData.get("email");

    if (!validateUsername(username)) {
      return fail(400, { message: "Invalid username" });
    }
    if (!validatePassword(password)) {
      return fail(400, { message: "Invalid password" });
    }

    const userId = generateUserId();
    const passwordHash = await hash(password, {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    try {
      await db.insert(table.user).values({ id: userId, username, passwordHash, name: name as string, email: email as string });
    } catch (e) {
      return fail(500, { message: "An error has occurred" });
    }
    return redirect(302, "/auth/signin");
  },
};

function generateUserId() {
  // ID with 120 bits of entropy, or about the same as UUID v4.
  const bytes = crypto.getRandomValues(new Uint8Array(15));
  const id = encodeBase32LowerCase(bytes);
  return id;
}

function validateUsername(username: unknown): username is string {
  return typeof username === "string" && username.length >= 3 && username.length <= 31 && /^[a-z0-9_-]+$/.test(username);
}

function validatePassword(password: unknown): password is string {
  return typeof password === "string" && password.length >= 6 && password.length <= 255;
}