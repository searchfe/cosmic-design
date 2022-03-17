export function computePosition(target: HTMLElement, container: HTMLElement) {
    const targetReact = target.getBoundingClientRect();
    const containerReact = container.getBoundingClientRect();
    const { clientWidth, clientHeight } = window.document.body;
    const horizontal = targetReact.left + containerReact.width * 1.5 > clientWidth ? 'right' : 'left';
    const vertical =targetReact.bottom + containerReact.height > clientHeight ? 'bottom' : 'top';

    const style = {};

    style[horizontal] = '0px';
    style[vertical] = `${targetReact.height}px`;

    return style;
}


export function computeMinWidth(target: HTMLElement, scale = 1.2): {minWidth: number} {
    const targetReact = target.getBoundingClientRect();
    const minWidth = targetReact.width * scale;
    return {
        minWidth: `${minWidth}px`,
    };
}