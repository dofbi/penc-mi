import { newModel, StringAdapter } from "casbin";

export const model = newModel(`
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)
`);

export const adapter = new StringAdapter(`
p, admin, users, (list)|(show)|(edit)
p, admin, organisations, (list)|(create)|(show)|(edit)|(delete)
p, admin, administration, list
p, admin, types_volontaire, (list)|(create)|(edit)|(delete)
p, admin, types_organisation, (list)|(create)|(edit)|(delete)

p, visiteur, users, list
`);