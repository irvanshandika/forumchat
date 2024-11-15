<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
  <title>Sign Up</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
  <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
    <div class="text-center">
      <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
    </div>
    <form method="post" action="?/register" use:enhance class="mt-8 space-y-6">
      <div class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input id="name" name="name" type="text" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" name="email" type="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input id="username" name="username" type="text" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" name="password" type="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
        <div class="flex gap-2 mt-2">
          <span class="text-sm">
            Already have an account?
            <a href="/auth/signin" class="font-medium text-indigo-600 hover:text-indigo-500">Sign In</a>
          </span>
        </div>
      </div>
    </form>
  </div>
</div>
{#if form?.message}
  <div class="fixed bottom-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-lg transition-opacity duration-300" role="alert">
    <p class="font-medium">{form.message}</p>
  </div>
{/if}
