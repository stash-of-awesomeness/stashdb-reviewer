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

<div class="p-1 col-span-4 md:col-span-2 md:text-right">
  <strong>{props.title}</strong>
</div>

<div class="p-1 col-span-8 md:col-span-10">
  {#if props.change}
    {#if props.change["__typename"]}
      {#if props.change["__typename"] == "Studio"}
      <StudioLink studio={props.change} />
      {/if}
    {:else}
    {props.change}
    {/if}
  {:else if props.items}
  <AddedRemovedItems items={props.items} type={diffType(props.items)} />
  {/if}
</div>