<script lang="ts">
  let props = $props()
</script>

<a href="/performers/{props.performer.id}" class="hover:underline">
  {props.performer.name}{#if props.performer.disambiguation}
  ({props.performer.disambiguation})
  {/if}
</a>
