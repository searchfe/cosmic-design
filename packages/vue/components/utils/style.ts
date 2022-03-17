export function computePosition(target: HTMLElement, container: HTMLElement, scale = 1.5) {
    const targetReact = target.getBoundingClientRect();
    const containerReact = container.getBoundingClientRect();
    const { clientWidth, clientHeight } = window.document.body;
    const width = containerReact.width * scale > 100 ? containerReact.width * scale : 100;
    const horizontal = targetReact.left + width> clientWidth ? 'right' : 'left';
    const vertical =targetReact.bottom + containerReact.height > clientHeight ? 'bottom' : 'top';

    const style = {};

    style[horizontal] = '0px';
    style[vertical] = `${targetReact.height}px`;

    return style;
}


export function computeMinWidth(target: HTMLElement, scale = 1.5): {minWidth: number} {
    const targetReact = target.getBoundingClientRect();
    const minWidth = targetReact.width * scale;
    return {
        minWidth: `${minWidth > 100 ? minWidth : 100}px`,
    };
}