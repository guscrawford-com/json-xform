import { DEFAULT_FILTERS } from "./default-filters";
import { TemplaterConfig } from "./template-config.interface";

export const DEFAULT_TEMPLATE_CONFIG : TemplaterConfig = {
    scaffolding : {
        syntax: {
            open:'${',
            close:'}',
            filter:{
                open:'(',
                close:')',
                delim:','
            },
            reference:{
                delim:'.'
            }
        }
    },
    filters: DEFAULT_FILTERS
};