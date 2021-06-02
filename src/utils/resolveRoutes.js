const resolveRoutes = (route) => {
  if (route.slice(1).split('/')[1] != undefined){
    if (route.slice(1).split('/')[1] === 'episodes') return '/episodes/:id';
    return '/characters/:id';
  }
  if( route === '/'){
    return route;
  }
  return `/${route}`; // /about
}

export default resolveRoutes;