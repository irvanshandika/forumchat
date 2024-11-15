<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>
    {$page.status} - {$page.error?.message}
  </title>
</svelte:head>

<main class="flex min-h-screen justify-center items-center">
  <div class="flex-col">
    <h1 class="text-center">{$page.status}</h1>
    <p>{$page.error?.message}</p>
  </div>
</main>
