<script lang="ts">
	import PerformerLink from "../links/PerformerLink.svelte";
	import SiteLink from "../links/SiteLink.svelte";
	import TagLink from "../links/TagLink.svelte";

  let props = $props()
</script>

{#if props.type == "URL"}
<ul>
  {#each props.items as link}
  <li>
    <SiteLink link={link} />
  </li>
  {/each}
</ul>
{:else if props.type == "Image"}
<div class="grid grid-cols-2 md:grid-cols-5 gap-2">
  {#each props.items as image}
  <div class="center">
    <img src={image.url} style="max-height: 150px; aspect-ratio: 544 / 817" alt="[performer]" />
    {image.width} x {image.height}
  </div>
  {/each}
  </div>
{:else if props.type == "BodyModification"}
<ul>
  {#each props.items as modification}
  <li>
    {modification.location}
    {#if modification.description}({modification.description}){/if}
  </li>
  {/each}
</ul>
{:else if props.type == "PerformerAppearance"}
<ul>
  {#each props.items as appearance}
  <li>
    {#if appearance.as}
    {appearance.as} (<PerformerLink performer={appearance.performer} />)
    {:else}
    <PerformerLink performer={appearance.performer} />
    {/if}
  </li>
  {/each}
</ul>
{:else if props.type == "Tag"}
  {#each props.items as tag}
  <TagLink tag={tag} />
  {/each}
{:else if props.type == "string"}
  {props.items.join(", ")}
{/if}