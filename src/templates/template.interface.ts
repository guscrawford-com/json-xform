
export interface TemplateDirective {
    [key:string]:any;
}
export interface ReplacementDirective extends TemplateDirective {
    [key:string]:any;
}
export interface RuntimeVariablesDirective extends TemplateDirective {
    [key:string]:any;
}
export interface MergeDirective extends TemplateDirective {
    [key:string]:any;
}
export interface RemovalDirective extends TemplateDirective {
    [key:string]:any;
}
export type MergeDirectiveValue = "@xform:replace" | "@xform:merge" | "@xform:remove" | "@xform:var";
export interface Template {
    [key:string]:any;
    "@xform:replace"?:ReplacementDirective
    "@xform:merge"?:MergeDirective
    "@xform:remove"?:RemovalDirective
    "@xform:var"?:RuntimeVariablesDirective
}