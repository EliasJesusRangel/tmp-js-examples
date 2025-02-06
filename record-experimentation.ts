enum AppRoles {
  admin = "admin",
  aggregates_manage = "aggregates_manage",
}

enum AGGREGATE_CASES {
  admin = "admin",
  aggregatesManage = "aggregatesManage",
  notPermitted = "notPermitted",
}

const aggregateCases: {
  label: AGGREGATE_CASES;
  data: { roles: AppRoles[] };
}[] = [
  { label: AGGREGATE_CASES.admin, data: { roles: [AppRoles.admin] } },
  {
    label: AGGREGATE_CASES.aggregatesManage,
    data: { roles: [AppRoles.aggregates_manage] },
  },
  { label: AGGREGATE_CASES.notPermitted, data: { roles: [] } },
];

for (const aggCase of aggregateCases) {
  console.log(aggCase);
}
