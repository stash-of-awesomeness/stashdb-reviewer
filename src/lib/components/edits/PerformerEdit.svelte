<script lang="ts">
	import SideBySideCompare from "./SideBySideCompare.svelte";

  let props = $props()
</script>

{#if props.performer != undefined && props.changes != undefined}
<div class="grid grid-cols-12 gap-x-5 gap-y-2">
  <div class="p-1 col-span-2 text-right">
    <strong>Modifying performer</strong>
  </div>
  <div class="p-1 col-span-10">
    {props.performer.name}
  </div>

  {#if props.changes.name}
  <SideBySideCompare title="Name" original={props.performer.name} change={props.changes.name} />
  {/if}
  {#if props.changes.disambiguation}
  <SideBySideCompare title="Disambiguation" original={props.performer.disambiguation} change={props.changes.disambiguation} />
  {/if}
  {#if props.changes.added_aliases || props.changes.removed_aliases}
  <SideBySideCompare title="Aliases" added={props.changes.added_aliases} removed={props.changes.removed_aliases} />
  {/if}
  {#if props.changes.gender}
  <SideBySideCompare title="Gender" original={props.performer.gender} change={props.changes.gender} />
  {/if}
  {#if props.changes.birthdate}
  <SideBySideCompare title="Birth date" original={props.performer.birth_date} change={props.changes.birthdate} />
  {/if}
  {#if props.changes.deathdate}
  <SideBySideCompare title="Death date" original={props.performer.death_date} change={props.changes.deathdate} />
  {/if}
  {#if props.changes.height}
  <SideBySideCompare title="Height" original={props.performer.height} change={props.changes.height} />
  {/if}
  {#if props.changes.weight}
  <SideBySideCompare title="Weight" original={props.performer.weight} change={props.changes.weight} />
  {/if}
  {#if props.changes.bra_size}
  <SideBySideCompare title="Bra size" original={props.performer.bra_size} change={props.changes.bra_size} />
  {/if}
  {#if props.changes.hip_size}
  <SideBySideCompare title="Hip size" original={props.performer.hip_size} change={props.changes.hip_size} />
  {/if}
  {#if props.changes.waist_size}
  <SideBySideCompare title="Waist size" original={props.performer.waist_size} change={props.changes.waist_size} />
  {/if}
  {#if props.changes.breast_type}
  <SideBySideCompare title="Breast type" original={props.performer.breast_type} change={props.changes.breast_type} />
  {/if}
  {#if props.changes.ethnicity}
  <SideBySideCompare title="Ethnicity" original={props.performer.ethnicity} change={props.changes.ethnicity} />
  {/if}
  {#if props.changes.country}
  <SideBySideCompare title="Nationality" original={props.performer.country} change={props.changes.country} />
  {/if}
  {#if props.changes.added_tattoos || props.changes.removed_tattoos}
  <SideBySideCompare title="Tattoos" added={props.changes.added_tattoos} removed={props.changes.removed_tattoos} />
  {/if}
  {#if props.changes.added_piercings || props.changes.removed_piercings}
  <SideBySideCompare title="Piercings" added={props.changes.added_piercings} removed={props.changes.removed_piercings} />
  {/if}
  {#if props.changes.added_urls || props.changes.removed_urls}
  <SideBySideCompare title="Links" added={props.changes.added_urls} removed={props.changes.removed_urls} />
  {/if}
  {#if props.changes.added_images || props.changes.removed_images}
  <SideBySideCompare title="Images" added={props.changes.added_images} removed={props.changes.removed_images} />
  {/if}
</div>
{:else}
{props.performer}
{props.changes.name}
{/if}