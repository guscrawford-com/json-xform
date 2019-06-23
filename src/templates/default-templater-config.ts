import { TemplaterConfig } from "./templater";
import { DEFAULT_FILTERS } from "./default-filters";

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