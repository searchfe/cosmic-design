type Placement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';

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

export function computePlacement(target: HTMLElement, container: HTMLElement, placement: Placement) {
    const targetReact = target.getBoundingClientRect();
    const containerReact = container.getBoundingClientRect();
    switch (placement) {
    case 'bottomRight':
        return getBRPlacement(targetReact, containerReact);
    case 'leftTop':
        return getLFPlacement(targetReact, containerReact);
    default:
    
        return {};
    }
}

export function getLFPlacement(target:DOMRect, container: DOMRect) {
    const style = {};
    const { clientHeight } = window.document.body;
    const horizontal = target.left - container.width < 0 ? 'left' : 'right';
    const vertical = target.top + container.height - target.height > clientHeight ? 'bottom' : 'top';
    style[horizontal] = `${target.width}px`;
    style[vertical] = '0px';
    return style;
}

export function getBRPlacement(target: DOMRect, container: DOMRect): Record<string, string> {
    const style = {};
    const { clientHeight } = window.document.body;
    const horizontal = target.left - container.width < 0 ? 'left' : 'right';
    const vertical = target.bottom + container.height > clientHeight ? 'bottom' : 'top';
    style[horizontal] = '0px';
    style[vertical] = `${vertical === 'top' ? target.height : 0}px`;
    return style;
}