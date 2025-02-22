<script lang="ts">
	import SiteLink from "../SiteLink.svelte";

  let props = $props()
</script>

{#if props.type == "URL"}
<ul class="mt-1">
  {#each props.items as link}
  <li>
    <SiteLink link={link} />
  </li>
  {/each}
</ul>
{:else if props.type == "Image"}
<div class="grid grid-cols-5 gap-2">
  {#each props.items as image}
  <div class="center">
    <img src={image.url} style="max-height: 150px; aspect-ratio: 544 / 817" alt="[performer]" />
    {image.width} x {image.height}
  </div>
  {/each}
  </div>
{:else if props.type == "BodyModification"}
<ul class="mt-1">
  {#each props.items as modification}
  <li>
    {modification.location}
    {#if modification.description}({modification.description}){/if}
  </li>
  {/each}
</ul>
{:else if props.type == "string"}
  {props.items.join(", ")}
{/if}