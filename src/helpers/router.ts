import router from "@/router";

export const getCurrentRoute = () => {
  const currentRoute = router.currentRoute?.value;

  return currentRoute;
};

export const getIsCurrentRoute = (name: string): boolean => {
  const currentRoute = getCurrentRoute();
  const isCurrentRoute = currentRoute?.name === name ? true : false;

  return isCurrentRoute;
};
