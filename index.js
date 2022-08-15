let start;

function distanceFromHqInBlocks(start, destination=42) {
    if (start>42){
        return distanceFromHqInBlocks =(start-destination)
    }
    else if (start<42) {
        return distanceFromHqInBlocks =(destination-start)
    }
};

function distanceFromHqInFeet() {
    return distanceFromHqInFeet =(distanceFromHqInBlocks*264);
}

function calculatesFarePrice() {
    if((distanceFromHqInBlocks-400)<=2000) {
        return distanceFromHqInBlocks*.02
    } else if ((distanceFromHqInBlocks-400)>=200) {
        return 2000*.02
    } else if ((distanceFromHqInBlocks-400)>2500) {
        return 'cannot travel that far'
    };
};


