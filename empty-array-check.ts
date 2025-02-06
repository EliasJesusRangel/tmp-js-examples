const arr = ["a", ...(true ? ["c"] : []), "b"];
const arr1 = ["a", ...(false ? ["c"] : []), "b"];

console.log(arr);
console.log(arr1);
enum ControlCenterActivityItemIds {
  Settings = "s",
  Security = "Security",
  PowerBi = "PowerBi",
  Support = "Support",
}
const Icons = {
  Security: () => "Security",
  Database: () => "Database",
  Support: () => "Support",
  Settings: () => "Settings",
};
const config = {
  ATSCALE_SML_KC_USER_MANAGEMENT: "ATSCALE_SML_KC_USER_MANAGEMENT",
};
enum Permission {
  canPublishCatalog = "canPublishCatalog",
  canUnPublishCatalog = "canUnPublishCatalog",
  canViewPublishedCatalogs = "canViewPublishedCatalogs",
  canManageAggregates = "canManageAggregates",
  canManageQueries = "canManageQueries",
  canManageDataWarehouses = "canManageDataWarehouses",
  canManageRepos = "canManageRepos",
  canManageSecurity = "canManageSecurity",
  canManageLicense = "canManageLicense",
  canApplyModelSettings = "canApplyModelSettings",
  canApplyEngineSettings = "canApplyEngineSettings",
  canManageLookerServerDefinitions = "canManageLookerServerDefinitions",
  canManageTableauServerDefinitions = "canManageTableauServerDefinitions",
  canManageLookerRepoCredentials = "canManageLookerRepoCredentials",
}

type ActivityItem = any;
// const controlCenterActivityItems: Array<ActivityItem> = [
//   {
//     id: ControlCenterActivityItemIds.Settings,
//     icon: Icons.Settings,
//   },
//   ...(permissions.canManageSecurity
//     ? [
//         {
//           id: ControlCenterActivityItemIds.Security,
//           icon: Icons.Security,
//           route: config?.ATSCALE_SML_KC_USER_MANAGEMENT,
//         },
//       ]
//     : []),
//   { id: ControlCenterActivityItemIds.PowerBi, icon: Icons.Database },
//   { id: ControlCenterActivityItemIds.Support, icon: Icons.Support },
// ];
const controlCenterActivityItemMap: Record<
  Permission,
  { id: ControlCenterActivityItemIds; icon: unknown; route?: string }[]
> = {
  canManageSecurity: [
    {
      id: ControlCenterActivityItemIds.Security,
      icon: Icons.Security,
      route: config?.ATSCALE_SML_KC_USER_MANAGEMENT,
    },
  ],
};
const controlCenterActivityItems: Array<ActivityItem> = [
  {
    id: ControlCenterActivityItemIds.Settings,
    icon: Icons.Settings,
  },
  ...(permissions.canManageSecurity
    ? [
        {
          id: ControlCenterActivityItemIds.Security,
          icon: Icons.Security,
          route: config?.ATSCALE_SML_KC_USER_MANAGEMENT,
        },
      ]
    : []),
  { id: ControlCenterActivityItemIds.PowerBi, icon: Icons.Database },
  { id: ControlCenterActivityItemIds.Support, icon: Icons.Support },
];
