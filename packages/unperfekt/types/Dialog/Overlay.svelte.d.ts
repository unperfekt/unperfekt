import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isOpen?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type OverlayProps = typeof __propDef.props;
export declare type OverlayEvents = typeof __propDef.events;
export declare type OverlaySlots = typeof __propDef.slots;
export default class Overlay extends SvelteComponentTyped<OverlayProps, OverlayEvents, OverlaySlots> {
}
export {};
