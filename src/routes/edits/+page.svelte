<script lang="ts">
  import EditSummary from '$lib/components/edits/EditSummary.svelte';
import type { PageProps } from './$types';

  let { data }: PageProps = $props(); 
</script>

<div class="space-y-5">
  {#each data.edits as edit}
  <EditSummary edit={edit} />
  {/each}
</div>
