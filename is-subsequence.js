// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let p1 = 0;
    let p2 = 0;
    
    while(p1 != str1.length ){
        console.log(str1[p1], str2[p2] , p1,p2,str1.length,str2.length  )
        if(p2 == str2.length){
            console.log(false)
            return false
        } 
    
        if(str2[p2] === str1[p1]){
            p1 ++;
            p2 ++
        }else if(str2[p2] !== str1[p1]){
            
            p2 ++
        }
    }
    console.log('true', )
    return true
}
isSubsequence('abc', 'acb')
// isSubsequence('sing', 'sting')
