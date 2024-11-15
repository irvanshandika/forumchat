<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
  <title>Sign In</title>
</svelte:head>

{#if form?.message}
  <div class="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300">
    {form.message}
  </div>
{/if}
<div class="min-h-screen flex items-center justify-center bg-gray-50">
  <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
    <div class="text-center">
      <h2 class="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
    </div>
    <form method="post" action="?/login" use:enhance class="mt-8 space-y-6">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="username" class="sr-only">Username</label>
          <input
            id="username"
            name="username"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Username"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
        <div class="flex gap-2 mt-2">
          <span class="text-sm">
            Don't have an account?
            <a href="/auth/signup" class="font-medium text-indigo-600 hover:text-indigo-500"> Sign up </a>
          </span>
        </div>
      </div>
    </form>
  </div>
</div>
