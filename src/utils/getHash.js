const getHash = () => {
  const hash = location.hash.slice(1).toLocaleLowerCase().split('/')[1];
  const item = location.hash.slice(1).toLocaleLowerCase().split('/')[2];
  if (item == undefined || item == ''){
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
  }else{
    return `${hash}/${item}`;
  }
}
export default getHash;