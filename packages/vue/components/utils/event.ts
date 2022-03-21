export function addListener(target: HTMLElement, eventType ,fn: (event: Event) => void, useCapture = false): void {
    target.addEventListener(eventType, fn, useCapture);
}

export function removeListener(target: HTMLElement, eventType ,fn: (event: Event) => void) {
    target.removeEventListener(eventType, fn);
}