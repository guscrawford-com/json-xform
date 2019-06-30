import { DEFAULT_FILTERS } from "./default-filters";
import { TemplaterConfig } from "./templater-config.interface";

export const DEFAULT_TEMPLATE_CONFIG : TemplaterConfig = {
    scaffolding : {
        syntax: {
            dontInfer:'@{',
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
    operations:{
        sort:{
            syntax:{
                delim:/\s/,
                asc:'asc',
                desc:'desc'
            }
        }
    },
    filters: DEFAULT_FILTERS
};