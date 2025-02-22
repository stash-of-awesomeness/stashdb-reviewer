<script lang="ts">
	import SiteLink from "../SiteLink.svelte";
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

<div class="p-1 col-span-2 text-right">
  <strong>{props.title}</strong>
</div>
{#if props.original || props.change}
<div class="bg-red-100 dark:bg-red-800 p-1 col-span-5">
  {props.original}
</div>
<div class="bg-green-100 dark:bg-green-800 p-1 col-span-5">
  {props.change}
</div>
{:else if props.removed || props.added}
<div class="p-1 col-span-5 {diffType(props.removed) == "string" ? "bg-red-100 dark:bg-red-800" : ""}">
  {#if props.removed}
  <AddedRemovedItems items={props.removed} type={diffType(props.removed)} />
  {/if}
</div>
<div class="p-1 col-span-5 {diffType(props.added) == "string" ? "bg-green-100 dark:bg-green-800" : ""}">
  {#if props.added}
  <AddedRemovedItems items={props.added} type={diffType(props.added)} />
  {/if}
</div>
{/if}