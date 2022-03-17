export function computePosition(target: HTMLElement, container: HTMLElement) {
    const targetReact = target.getBoundingClientRect();
    const containerReact = container.getBoundingClientRect();
    const { clientWidth, clientHeight } = window.document.body;
    const horizontal = targetReact.left + containerReact.width > clientWidth ? 'right' : 'left';
    const vertical =targetReact.bottom + containerReact.height > clientHeight ? 'bottom' : 'top';

    const style = {};

    style[horizontal] = '0px';
    style[vertical] = `${targetReact.height}px`;

    return style;
}