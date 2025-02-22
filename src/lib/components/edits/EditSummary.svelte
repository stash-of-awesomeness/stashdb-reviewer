<script lang="ts">
	import PerformerEdit from "./PerformerEdit.svelte";
	import SceneEdit from "./SceneEdit.svelte";

  let props = $props()

  const OPERATION_TYPE_DISPLAY = {
    'CREATE': 'Create',
    'DESTROY': 'Destroy',
    'MERGE': 'Merge',
    'MODIFY': 'Modify',
  }

  const OBJECT_TYPE_DISPLAY = {
    'PERFORMER': 'Performer',
    'SCENE': 'Scene',
    'STUDIO': 'Studio',
    'TAG': 'Tag',
  }

  let formatTitle = (edit) => {
    const operationType = OPERATION_TYPE_DISPLAY[edit.operation]
    const objectType = OBJECT_TYPE_DISPLAY[edit.target_type]

    return `${operationType} ${objectType}`
  }

  let qualityScore = (edit) => {
    return 100
  }
</script>

<div class="border border-black dark:border-gray-800 bg-gray-300 dark:bg-gray-700 p-5">
  <h3 class="text-xl">{formatTitle(props.edit)}</h3>
  <div>
    <strong>Author:</strong> {props.edit.user.name}
  </div>
  <div>
    <strong>Created:</strong> {props.edit.created}
  </div>
  {#if props.edit.updated}
  <div>
    <strong>Last updated:</strong> {props.edit.updated}
  </div>
  {/if}
  <div>
    <strong>Quality score:</strong> {qualityScore(props.edit)}
  </div>

  {#if props.edit.target_type == "PERFORMER"}
  <PerformerEdit performer={props.edit.target} changes={props.edit.details} />
  {:else if props.edit.target_type == "SCENE"}
  <SceneEdit scene={props.edit.target} changes={props.edit.details} />
  {/if}

  <div class="space-y-5 mt-5">
    {#each props.edit.comments as comment}
    <div class="bg-gray-200 dark:bg-gray-800 p-5">
      <pre class="whitespace-pre-wrap">{comment.comment}</pre>
      <div class="text-right">
        {comment.user.name} at {comment.date}
      </div>
    </div>
    {/each}
  </div>

  {#if !props.edit.updatable}
  <div class="mt-5 max-md:grid max-md:grid-cols-3 space-x-5">
    <button type="button" class="py-2 px-5 w-full md:w-auto bg-green-500">Yes</button>
    <button type="button" class="py-2 px-5 bg-orange-500">Abstain</button>
    <button type="button" class="py-2 px-5 bg-red-500">No</button>
  </div>
  {/if}
</div>