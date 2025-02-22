<script lang="ts">
	import CreationRow from "./CreationRow.svelte";
  import SideBySideCompare from "./SideBySideCompare.svelte";

  let props = $props()
</script>

{#if props.scene != undefined && props.changes != undefined}
<div class="grid grid-cols-12 gap-x-5 gap-y-2">
  <div class="p-1 col-span-full md:col-span-2 md:text-right">
    <strong>Modifying scene</strong>
  </div>
  <div class="p-1 col-span-full md:col-span-10">
    {props.scene.title}
  </div>

  {#if props.changes.title}
  <SideBySideCompare title="Title" original={props.scene.title} change={props.changes.title} />
  {/if}
  {#if props.changes.date}
  <SideBySideCompare title="Release date" original={props.scene.date} change={props.changes.date} />
  {/if}
  {#if props.changes.duration}
  <SideBySideCompare title="Duration" original={props.scene.duration} change={props.changes.duration} />
  {/if}
  {#if props.changes.added_performers || props.changes.removed_performers}
  <SideBySideCompare title="Performers" added={props.changes.added_performers} removed={props.changes.removed_performers} />
  {/if}
  {#if props.changes.studio}
  <SideBySideCompare title="Studio" original={props.scene.studio} change={props.changes.studio} />
  {/if}
  {#if props.changes.director}
  <SideBySideCompare title="Director" original={props.scene.director} change={props.changes.director} />
  {/if}
  {#if props.changes.added_urls || props.changes.removed_urls}
  <SideBySideCompare title="Links" added={props.changes.added_urls} removed={props.changes.removed_urls} />
  {/if}
  {#if props.changes.details}
  <SideBySideCompare title="Details" original={props.scene.details} change={props.changes.details} />
  {/if}
  {#if props.changes.code}
  <SideBySideCompare title="Studio code" original={props.scene.code} change={props.changes.code} />
  {/if}
  {#if props.changes.production_date}
  <SideBySideCompare title="Production date" original={props.scene.production_date} change={props.changes.production_date} />
  {/if}
  {#if props.changes.added_tags || props.changes.removed_tags}
  <SideBySideCompare title="Tags" added={props.changes.added_tags} removed={props.changes.removed_tags} />
  {/if}
  {#if props.changes.added_images || props.changes.removed_images}
  <SideBySideCompare title="Images" added={props.changes.added_images} removed={props.changes.removed_images} />
  {/if}
  {#if props.changes.added_fingerprints || props.changes.removed_fingerprints}
  <SideBySideCompare title="Fingerprints" added={props.changes.added_fingerprints} removed={props.changes.removed_fingerprints} />
  {/if}
</div>
{:else}
<div class="grid grid-cols-12 gap-x-5 gap-y-2">
  {#if props.changes.title}
  <CreationRow title="Title" change={props.changes.title} />
  {/if}
  {#if props.changes.date}
  <CreationRow title="Release date" change={props.changes.date} />
  {/if}
  {#if props.changes.duration}
  <CreationRow title="Duration" change={props.changes.duration} />
  {/if}
  {#if props.changes.added_performers}
  <CreationRow title="Performers" items={props.changes.added_performers} />
  {/if}
  {#if props.changes.studio}
  <CreationRow title="Studio" change={props.changes.studio} />
  {/if}
  {#if props.changes.director}
  <CreationRow title="Director" change={props.changes.director} />
  {/if}
  {#if props.changes.added_urls || props.changes.removed_urls}
  <CreationRow title="Links" items={props.changes.added_urls} />
  {/if}
  {#if props.changes.details}
  <CreationRow title="Details" change={props.changes.details} />
  {/if}
  {#if props.changes.code}
  <CreationRow title="Studio code" change={props.changes.code} />
  {/if}
  {#if props.changes.production_date}
  <CreationRow title="Production date" change={props.changes.production_date} />
  {/if}
  {#if props.changes.added_tags || props.changes.removed_tags}
  <CreationRow title="Tags" items={props.changes.added_tags} />
  {/if}
  {#if props.changes.added_images || props.changes.removed_images}
  <CreationRow title="Images" items={props.changes.added_images} />
  {/if}
  {#if props.changes.added_fingerprints || props.changes.removed_fingerprints}
  <CreationRow title="Fingerprints" items={props.changes.added_fingerprints} />
  {/if}
</div>
{/if}