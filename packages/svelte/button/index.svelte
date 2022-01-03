<script lang="ts">
    import styles from './button.module.css'; // 由DSM提供
    import type { State, Size, Type } from '@cosmic-design/blueprint/button'; // 由DSM提供
    export let state: State = 'normal';
    export let size: Size = 'base';
    export let type: Type = 'default';
    export let prefab: string = '';
</script>

<div class="{styles.root} {prefab} {state} {size} {type} {$$props.class} aa button">
    {#if $$slots.prefix}
        <slot name='prefix' classes={styles.prefix}></slot>
    {/if}
    <slot classes={styles.label}>Button</slot>
    {#if $$slots.subfix}
        <slot name='subfix' classes={styles.subfix}></slot>
    {/if}
</div>