import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DialogProps = typeof __propDef.props;
export declare type DialogEvents = typeof __propDef.events;
export declare type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponentTyped<DialogProps, DialogEvents, DialogSlots> {
}
export {};
