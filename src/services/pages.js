export const hasOriginPage = route => {
  if (!route) return false;
  if (!route.params) return false;
  return Boolean(route.params.originPage);
}

export const getOriginPage = route => route.params.originPage;
