import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Wheter the dialog is open or not. */ isOpen?: boolean | undefined;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
        buttongroup: {};
    };
};
export declare type DialogProps = typeof __propDef.props;
export declare type DialogEvents = typeof __propDef.events;
export declare type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponentTyped<DialogProps, DialogEvents, DialogSlots> {
}
export {};
