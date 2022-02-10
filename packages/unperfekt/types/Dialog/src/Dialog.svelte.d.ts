import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Wheter the dialog is open or not. */ isOpen?: boolean | undefined;
    };
    slots: {
        header: {};
        default: {};
        buttongroup: {};
    };
    getters: {};
    events: {
        close: CustomEvent<any>;
    };
};
export declare type DialogProps = typeof __propDef.props;
export declare type DialogEvents = typeof __propDef.events;
export declare type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponentTyped<DialogProps, DialogEvents, DialogSlots> {
}
export {};
