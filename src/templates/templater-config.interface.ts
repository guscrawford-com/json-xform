export interface TemplaterConfig {
    /**
     * Controls scaffolding options
     */
    scaffolding:{
        /**
         * Controls syntax for scaffolding
         */
        syntax:{
            
            /** The indicator that **scaffolding should not try to infer the result** (i.e. a numeral returned will end-up stringified) ⚠ must **begin** with a different character than standard open symbol*/
            dontInfer:string;
            /** The indicator that **scaffolding is open** */
            open:string;
            /** The indicator that **scaffolding is finished** */
            close:string;
            /**
             * Controls syntax for filters
             */
            filter:{
                /** The indicator that **filtering is open** */
                open:string;
                /** The indicator that **filtering is finished** */
                close:string;
                /** The indicator separating **filtering arguments** */
                delim:string|RegExp;
            },
            /**
             * Controls syntax for referencing data on JSON objects
             */
            reference:{
                /** The indicator separating **object-property path resolutions** */
                delim:string|RegExp;
            }
        };
    };
    /**
     * Controls Operations related syntax
     */
    operations: {
        /**
         * Controls operation syntax
         */
        sort: {
            /**
             * Controls sort operation syntax
             */
            syntax: {
                /** The indicator separating **object-property path resolutions** for sorting and the direction */
                delim:string|RegExp;
                /** The indicator to sort **ascending** */
                asc:string;
                /** The indicator to sort **descending** */
                desc:string;
            }
        }
    }
    /**
     * Contains arrow functions used to transform exressions:
     * `(args:any[])=>any`
     * Where:
     * - args[0] is always the instance of the `Templater`
     * - args[1..] are the delimeter (, by default) separated filter arguments
     */
    filters: {
        [key:string]:(args:any[])=>any
    }
}