<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import { trpc } from '$lib/trpc/client';

  export let data: PageData;
  $: ({ articles } = data);

  let greeting = '';
  let loading = false;

  const loadData = async () => {
    loading = true;
    greeting = await trpc($page).greeting.query();
    loading = false;
  };
</script>

<div class="w-2/3 flex flex-col ">
  <div class="w-full">
  <a
  href="#load"
  role="button"
  class="w-auto inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  aria-busy={loading}
  on:click|preventDefault={loadData}>Press to load data from tRPC</a
>
{#if loading}
  <div class="text-gray-500">Loading...</div>
{/if}
{#if greeting}
<p class="my-2">{greeting}</p>
{/if}
  </div>
  <form action="?/createArticle" method="POST" class="mt-4 mb-4 flex flex-col shadow-md border-2 border-gray-500 p-4 rounded-md bg-gray-200">
    <h3 class="text-lg font-bold">New Article</h3>
    <label for="title"> Title </label>
    <input type="text" id="title" name="title" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "/>
    <label for="description"> description </label>
    <textarea id="content" name="content" rows={5} class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
    <div class="flex flex-row justify-between my-2">
    <button type="submit" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add Article</button>
    </div>
  </form>

  <div class="w-full">
    <h2 class="text-lg font-bold">Articles:</h2>
    {#each articles as article}
      <div class="bg-white shadow-md border-2 border-gray-500 p-4 rounded-md mb-1">
        <div class="text-lg">{article.title}</div>
        <p class="text-md text-gray-700">
          {article.content}
        </p>
        <div class="flex flex-row justify-between my-2">
        <form action="?/deleteArticle&id={article.id}" method="POST" class="w-32">
          <button type="submit" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Delete Article</button>
        </form>
        <a href="/{article.id}" role="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >Edit Article</a
        >
        </div>
      </div>
    {/each}
  </div>
  
</div>
