<script lang="ts">
    import _styles from '@cosmic-design/ui/button.module.css';
    import type { State, Size } from '@cosmic-design/ui/button'; ;
    // import Icon from '../icon/icon.svelte';
    import { createEventDispatcher } from 'svelte';
    export let styles = _styles;
    export let size: Size = 'base';
    export let disabled : boolean = false;
    let state = disabled ? 'disabled': 'normal';

    const dispatch = createEventDispatcher();
    function click(event: Event) {
		dispatch('click', event);
	}
</script>

<div class="{styles.button} {state} {size} {$$props.class || ''}" on:click={click}>
    <!-- <Icon></Icon> -->
    {#if $$slots.prefix}
        <slot name='prefix' classes="{styles.prefix} {size}"></slot>
    {/if}
    <slot classes={styles.label}>Button</slot>
    {#if $$slots.subfix}
        <slot name='subfix' classes="{styles.subfix} {size}"></slot>
    {/if}
</div>
