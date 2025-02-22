<script lang="ts">
  let props = $props()
</script>

<a href="/studios/{props.studio.id}" class="hover:underline">
  {props.studio.name}
</a>
