
export interface TemplateDirective {
    [key:string]:any;
}
/** Sort properties ex. `{"@xform:sort":"property.key asc"}` */
export interface SortDirective extends TemplateDirective {
    [key:string]:string;
}

/** Create variables from properties ex. `{"@xform:var":"property.key"}` */
export interface RuntimeVariablesDirective extends TemplateDirective {
    [key:string]:any;
}
/** Merge properties ex. `{"@xform:merge":{"property.key":"value"}` */
export interface MergeDirective extends TemplateDirective {
    [key:string]:{
        [key:string]:any
    };
}

/** Remove properties ex. `{"@xform:remove":"property.key"}` */
export interface RemovalDirective extends TemplateDirective {
    [key:string]:string;
}
export type MergeDirectiveValue = "@xform:replace" | "@xform:merge" | "@xform:remove" | "@xform:var";
export interface Template {
    [key:string]:any;
    "@xform:sort"?:SortDirective
    "@xform:merge"?:MergeDirective
    "@xform:remove"?:RemovalDirective
    "@xform:var"?:RuntimeVariablesDirective
}