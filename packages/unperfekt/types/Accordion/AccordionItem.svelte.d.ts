import { SvelteComponentTyped } from "svelte";
import type { Key } from "../state/collection/selection";
declare const __propDef: {
    props: {
        /** Unique identifier for this row */ key: Key;
        /** Accordion title for this row */ title: string;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {};
    };
};
export declare type AccordionItemProps = typeof __propDef.props;
export declare type AccordionItemEvents = typeof __propDef.events;
export declare type AccordionItemSlots = typeof __propDef.slots;
export default class AccordionItem extends SvelteComponentTyped<AccordionItemProps, AccordionItemEvents, AccordionItemSlots> {
}
export {};
