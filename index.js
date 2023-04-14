// Code your solution in this file!
 const  distanceFromHqInBlocks = function(picupLocation){
 return Math.abs(picupLocation-42)
 }

 function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264
    }

function distanceTravelledInFeet( up,down){
return Math.abs((up-down)*264)
}    


function calculatesFarePrice(start, destination){
    const x=Math.abs((start-destination)*264)
    if(x<400)
    return 0

    if(x>400&&x<=2000)
    return (x-400)*0.02

    if(x>2000&&x<=2500)
    return 25

    if(x>2500)
    return 'cannot travel that far'
    


}