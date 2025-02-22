<script lang="ts">
  let props = $props()
</script>

<img src={props.link.site.icon} class="inline size-4" alt="[icon]" />
<a href="/sites/{props.link.site.id}"><strong>{props.link.site.name}:</strong></a>
<a href={props.link.url} class="hover:underline" target="_blank">{props.link.url}</a>