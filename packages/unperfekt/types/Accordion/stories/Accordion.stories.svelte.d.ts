import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AccordionProps = typeof __propDef.props;
export declare type AccordionEvents = typeof __propDef.events;
export declare type AccordionSlots = typeof __propDef.slots;
export default class Accordion extends SvelteComponentTyped<AccordionProps, AccordionEvents, AccordionSlots> {
}
export {};
