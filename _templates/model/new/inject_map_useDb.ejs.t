---
inject: true
to: infra/adapters/mongoAdapter/utils/db/useDb.js
after: import connectDB from './index';
skip_if: const <%= name %> = new Map([['<%= name %>', schema<%= h.capitalize(name)%>]]);
---
const <%= name %> = new Map([['<%= name %>', schema<%= h.capitalize(name)%>]]);