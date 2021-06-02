const resolveRoutes = (route) => {
  if (route === '/') {
    return route;
  }
  if (route.split('/')[1] != undefined){
    if (route.split('/')[0] === 'episodes'){
      return '/episodes/:id';
    }
    return '/characters/:id';
  }

  return `/${route}`; // /about
}

export default resolveRoutes;