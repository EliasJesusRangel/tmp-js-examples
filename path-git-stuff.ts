const paths = [
  { paths: ".changeset/clever-dodos-raise.md" },
  { paths: "apps/web/app/[locale]/control-center/control-center.tsx" },
  { paths: "apps/web/app/[locale]/design-center/[...slug]/layout.test.tsx" },
  { paths: "apps/web/app/[locale]/design-center/[...slug]/layout.tsx" },
  { paths: "apps/web/app/[locale]/design-center/[...slug]/overlays.tsx" },
  { paths: "apps/web/app/[locale]/design-center/[...slug]/page.tsx" },
  {
    paths:
      "apps/web/app/[locale]/design-center/model-designer/model-designer.test.tsx",
  },
  {
    paths:
      "apps/web/app/[locale]/design-center/model-designer/model-designer.tsx",
  },
  { paths: "apps/web/app/[locale]/design-center/page.tsx" },
  {
    paths:
      "apps/web/app/[locale]/design-center/resource-view/catalog-sub-tab-layout.tsx",
  },
  {
    paths:
      "apps/web/app/[locale]/design-center/resource-view/resource-view.tsx",
  },
  { paths: "apps/web/app/[locale]/design-center/routing/models/pathnames.ts" },
  { paths: "apps/web/app/[locale]/design-center/routing/models/route-item.ts" },
  {
    paths:
      "apps/web/app/[locale]/design-center/routing/protected-model-designer.tsx",
  },
  {
    paths:
      "apps/web/app/[locale]/design-center/routing/use-get-selected-view.test.tsx",
  },
  {
    paths:
      "apps/web/app/[locale]/design-center/routing/use-get-selected-view.tsx",
  },
  {
    paths:
      "apps/web/app/[locale]/design-center/routing/use-read-pathname.test.ts",
  },
  { paths: "apps/web/app/[locale]/design-center/routing/use-read-pathname.ts" },
  {
    paths:
      "apps/web/app/[locale]/design-center/routing/use-routing-activity-items.ts",
  },
  {
    paths:
      "apps/web/app/[locale]/design-center/routing/use-update-route.test.ts",
  },
  { paths: "apps/web/app/[locale]/design-center/routing/use-update-routes.ts" },
  {
    paths:
      "apps/web/app/[locale]/design-center/routing/utilities/path-utilities.ts",
  },
  { paths: "apps/web/app/[locale]/layout.tsx" },
  { paths: "apps/web/app/[locale]/routing-component.tsx" },
  { paths: "apps/web/components/left-sidebar/deploy/deploy-sidebar.test.tsx" },
  { paths: "apps/web/components/left-sidebar/deploy/deploy-sidebar.tsx" },
  { paths: "apps/web/components/left-sidebar/left-sidebar.tsx" },
  { paths: "apps/web/components/left-sidebar/repo-sidebar.tsx" },
  { paths: "apps/web/hooks/use-deploy-form.ts" },
  { paths: "apps/web/hooks/use-deploy.ts" },
  { paths: "apps/web/hooks/use-git.ts" },
  { paths: "apps/web/store/activity-item/activity-item-store.ts" },
];
console.log(
  paths
    .filter(({ paths }) => paths.endsWith("ts") || paths.endsWith("tsx"))
    .reduce(
      (prev, current) =>
        `${prev} ${
          current.paths.split("/")[current.paths.split("/").length - 1]
        }`,
      ""
    )
);
