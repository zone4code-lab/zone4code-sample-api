---
inject: true
to: infra/adapters/mongoAdapter/utils/db/useDb.js
after: import { schemaConfig } from '../../schema/config';
skip_if: import { schema<%= h.capitalize(name)%> } from '../../schema/<%= Name %> ';
---
import { schema<%= h.capitalize(name)%> } from '../../schema/<%= Name %> ';