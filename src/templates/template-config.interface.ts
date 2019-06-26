/**
 * Configures behavior of a `Templater`
 */
export interface TemplaterConfig {
    /**
     * Controls scaffolding options
     */
    scaffolding:{
        /**
         * Controls syntax for scaffolding
         */
        syntax:{
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
                delim:string;
            },
            /**
             * Controls syntax for referencing data on JSON objects
             */
            reference:{
                /** The indicator separating **object-property path resolutions** */
                delim:string;
            }
        };
    };
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