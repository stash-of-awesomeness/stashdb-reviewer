<script lang="ts">
	import PerformerLink from "../links/PerformerLink.svelte";
	import CreationRow from "./CreationRow.svelte";
import SideBySideCompare from "./SideBySideCompare.svelte";

  let props = $props()
</script>

{#if props.performer != undefined && props.changes != undefined}
<div class="grid grid-cols-12 gap-x-5 gap-y-2">
  <div class="p-1 col-span-full md:col-span-2 md:text-right">
    <strong>Modifying performer</strong>
  </div>
  <div class="p-1 col-span-full md:col-span-10">
    <PerformerLink performer={props.performer} />
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
<div class="grid grid-cols-12 gap-x-5 gap-y-2">
  {#if props.changes.name}
  <CreationRow title="Name" change={props.changes.name} />
  {/if}
  {#if props.changes.disambiguation}
  <CreationRow title="Disambiguation" change={props.changes.disambiguation} />
  {/if}
  {#if props.changes.added_aliases || props.changes.removed_aliases}
  <CreationRow title="Aliases" items={props.changes.added_aliases} />
  {/if}
  {#if props.changes.gender}
  <CreationRow title="Gender" change={props.changes.gender} />
  {/if}
  {#if props.changes.birthdate}
  <CreationRow title="Birth date" change={props.changes.birthdate} />
  {/if}
  {#if props.changes.deathdate}
  <CreationRow title="Death date" change={props.changes.deathdate} />
  {/if}
  {#if props.changes.height}
  <CreationRow title="Height" change={props.changes.height} />
  {/if}
  {#if props.changes.weight}
  <CreationRow title="Weight" change={props.changes.weight} />
  {/if}
  {#if props.changes.bra_size}
  <CreationRow title="Bra size" change={props.changes.bra_size} />
  {/if}
  {#if props.changes.hip_size}
  <CreationRow title="Hip size" change={props.changes.hip_size} />
  {/if}
  {#if props.changes.waist_size}
  <CreationRow title="Wasit size" change={props.changes.waist_size} />
  {/if}
  {#if props.changes.breast_type}
  <CreationRow title="Breast type" change={props.changes.breast_type} />
  {/if}
  {#if props.changes.ethnicity}
  <CreationRow title="Ethnicity" change={props.changes.ethnicity} />
  {/if}
  {#if props.changes.country}
  <CreationRow title="Country" change={props.changes.country} />
  {/if}
  {#if props.changes.added_tattoos || props.changes.removed_tattoos}
  <CreationRow title="Tattoos" items={props.changes.added_tattoos} />
  {/if}
  {#if props.changes.added_piercings || props.changes.removed_piercings}
  <CreationRow title="Piercings" items={props.changes.added_piercings} />
  {/if}
  {#if props.changes.added_urls || props.changes.removed_urls}
  <CreationRow title="Links" items={props.changes.added_urls} />
  {/if}
  {#if props.changes.added_images || props.changes.removed_images}
  <CreationRow title="Images" items={props.changes.added_images} />
  {/if}
</div>
{/if}