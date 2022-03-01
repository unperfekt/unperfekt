import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Wheter the portal is open or not. */ isOpen?: boolean | undefined;
    };
    slots: {
        default: {};
    };
    getters: {};
    events: {};
};
export declare type OverlayProps = typeof __propDef.props;
export declare type OverlayEvents = typeof __propDef.events;
export declare type OverlaySlots = typeof __propDef.slots;
export default class Overlay extends SvelteComponentTyped<OverlayProps, OverlayEvents, OverlaySlots> {
}
export {};
