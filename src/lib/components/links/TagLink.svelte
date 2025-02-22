<script lang="ts">
  let props = $props()
</script>

<a href="/tags/{props.tag.id}" class="hover:underline px-1 mr-2 mb-2 dark:bg-gray-800 inline-block" title={props.tag.description}>
  {props.tag.name}
</a>
