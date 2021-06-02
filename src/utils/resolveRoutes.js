const resolveRoutes = (route) => {
  console.log(`resolveroutes ${route}`);
  //home
  if (route === '/') {
    return route;
  }
  // pagination
  else if (route.split('/')[0].includes('pag')) {
    return '/charactersPag/:id';
  }
  // individual item
  else if (route.split('/')[1] != undefined){

    if (route.split('/')[0] === 'episodes'){
      return '/episodes/:id';
    }else {
      return '/characters/:id';
    }
  }

  // episodes or character
  return `/${route}`;
}

export default resolveRoutes;