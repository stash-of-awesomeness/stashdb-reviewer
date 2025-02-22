<script lang="ts">
	import StudioLink from "../links/StudioLink.svelte";
	import AddedRemovedItems from "./AddedRemovedItems.svelte";

  let props = $props()

  let diffType = (items) => {
    if (!items) {
      return null
    }

    if (items.length == 0) {
      return null
    }

    return items[0]["__typename"] || "string"
  }
</script>

<div class="p-1 col-span-full md:col-span-2 md:text-right">
  <strong>{props.title}</strong>
</div>
{#if props.original || props.change}
<div class="bg-red-100 dark:bg-red-800 p-1 col-span-6 md:col-span-5">
  {#if props.original?.__typename}
    {#if props.original["__typename"] == "Studio"}
    <StudioLink studio={props.original} />
    {/if}
  {:else}
  {props.original}
  {/if}
</div>
<div class="bg-green-100 dark:bg-green-800 p-1 col-span-6 md:col-span-5">
  {#if props.change?.__typename}
    {#if props.change["__typename"] == "Studio"}
    <StudioLink studio={props.change} />
    {/if}
  {:else}
  {props.change}
  {/if}
</div>
{:else if props.removed || props.added}
<div class="p-1 col-span-6 md:col-span-5 {diffType(props.removed) == "string" ? "bg-red-100 dark:bg-red-800" : ""}">
  {#if props.removed}
  <AddedRemovedItems items={props.removed} type={diffType(props.removed)} />
  {/if}
</div>
<div class="p-1 col-span-6 md:col-span-5 {diffType(props.added) == "string" ? "bg-green-100 dark:bg-green-800" : ""}">
  {#if props.added}
  <AddedRemovedItems items={props.added} type={diffType(props.added)} />
  {/if}
</div>
{/if}