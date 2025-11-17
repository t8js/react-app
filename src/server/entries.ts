// Populated automatically during the build phase
export const entries = (
  await Promise.all([
    // main
    import("../entries/main/server/index.ts"),
  ])
).map(({ server }) => server);
