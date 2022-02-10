import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
           * DOM Element or CSS Selector.
           *
           * @default "body"
           */ target?: string | HTMLElement | undefined;
    };
    slots: {
        default: {};
    };
    getters: {
        target: string;
    };
    events: {};
};
export declare type PortalProps = typeof __propDef.props;
export declare type PortalEvents = typeof __propDef.events;
export declare type PortalSlots = typeof __propDef.slots;
export default class Portal extends SvelteComponentTyped<PortalProps, PortalEvents, PortalSlots> {
    get target(): string;
}
export {};
