---
to: app/api/routes/index.js
inject: true
append: true
---

import <%= h.capitalize(name)%> from './<%= name%>';