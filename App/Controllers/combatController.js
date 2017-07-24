app.controller('combatController', ['$location', '$scope', '$route','$routeParams','orderByFilter','campaignFactory','playerFactory','userFactory',function(loc, scope, route, routeParams, orderBy, campaignFactory, playerFactory, userFactory){

let currUser = userFactory.getCurUser((data) => {
    if(data.data.user === false) {
            loc.path('/login');
    }
});
scope.fighterArray = [];
var currTurn = 0;
campaignFactory.getFighters((data)=>{
     if(data){
       for(let i=0; i<data.length; i++){
          data[i].initiative=parseInt(data[i].initiative);
          data[i].turn = i + 1;
          scope.fighterArray.push(data[i]);
       }
    }
    scope.fighterArray[0].currentTurn=true;
});
scope.nextTurn = () => {
    if (currTurn === scope.fighterArray.length - 1){
        currTurn = 0;
    }else{
        currTurn += 1;
    }
    
};
scope.yourTurn = (index) => {
    if(scope.fighterArray[index].turn === index + 1 && index === currTurn){
        return "your-combat";
    } else {return null;}
};


}]);