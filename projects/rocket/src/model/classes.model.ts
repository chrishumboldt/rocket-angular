/**
 * @author Chris Humboldt
 */

export interface ClassNameFromOptions {
   from: any;
   classNames: any;
}
export interface ClassNameToOptions {
   to: any;
   classNames: any;
}
export interface ClassNameExecuteOptions {
   element: HTMLElement;
   classNames: string[];
}
export interface ClassNameModificationOptions {
   elements: any;
   add?: string;
   remove?: string;
}
export interface ClassNameToggleOptions {
   elements: any;
   className: string;
}
