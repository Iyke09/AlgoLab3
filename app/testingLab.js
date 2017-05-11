exports.reverseString = reverseString = (str) =>{
  let result = "";
  if (str === ''){
    return null;
  }else{
  let listx = reverse(str);
  for (let i=0;i < listx.length;i++){
    result = result + listx[i];
  }
  if (result === str){
    return true;
  }
  else{
    return result;
  }
 }
}



reverse = (str) =>{
   let result = [];
  for (let i=0;i < str.length;i++){
    result.unshift(str[i]);
  }
  return result;
}
