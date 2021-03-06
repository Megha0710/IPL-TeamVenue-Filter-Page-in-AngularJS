var app=angular.module("myApp",[]);
app.controller('myCtrl',function($scope,$http)
{
  $http({
    method : "GET",
    url : "venue.json"
  }).then(function mySuccess(response) {
    $scope.venues = response.data;

  }, function myError(response) {
    $scope.myWelcome = response.statusText;
  });

  $scope.venues={
    "1" : {
      "name": "Brabourne Stadium",
      "location": "Mumbai, India"
    },
    "2" : {
      "name": "Barabati Stadium",
      "location": "Cuttack, India"
    },
    "3" : {
      "name": "Sardar Patel Stadium",
      "location": "Ahmedabad, India"
    },
    "4":{
      "name": "M.Chinnaswamy Stadium",
      "location": "Bengaluru, India"
    },
    "5" : {
      "name": "Feroz Shah Kotla",
      "location": "Delhi, India"
    },
    "6" :{
      "name": "Rajiv Gandhi International Stadium",
      "location": "Hyderabad, India"
    },
    "7" : {
      "name": "JSCA International Stadium Complex",
      "location": "Ranchi, India"
    },
    "8" :{
      "name": "Punjab Cricket Association Stadium",
      "location": "Mohali, India"
    },
    "9" : {
      "name": "Eden Gardens",
      "location": "Kolkata, India"
    },
    "10" : {
      "name": "Sheikh Zayed Stadium",
      "location": "Abu Dhabi, United Arab Emirates"
    },
    "11" : {
      "name": "Sharjah Cricket Association Stadium",
      "location": "Sharjah, United Arab Emirates"
    },
    "12" : {
      "name": "Dubai International Cricket Stadium ",
      "location": "Dubai, United Arab Emirates"
    }
  }


  $scope.venuesDisplay = [];



  $scope.teams={
    "58": {
      "name": "Chennai Super Kings",
      "s_name": "CSK"
    },
    "59" :{
      "name": "Royal Challengers Bangalore",
      "s_name": "RCB"
    },
    "61" : {
      "name": "Delhi Daredevils",
      "s_name": "DD"
    },
    "62" : {
      "name": "Mumbai Indians",
      "s_name": "MI"
    },
    "63" : {
      "name": "Kolkata Knight Riders",
      "s_name": "KKR"
    },
    "64" : {
      "name": "Rajasthan Royals",
      "s_name": "RR"
    },
    "255" : {
      "name": "Sunrisers Hyderabad",
      "s_name": "SRH"
    },
    "65" : {
      "name": "Kings XI Punjab",
      "s_name": "KXIP"
    }
  }


  $scope.matches=[
    {
      "header": {
        "start_time": "1397658600",
        "match_desc": "1st Match",
        "status": "Kolkata Knight Riders won by 41 runs"
      },
      "venue_id": 10,
      "team1_id": 62,
      "team2_id": 63,
      "id": 1
    },
    {
      "header": {
        "start_time": "1397745000",
        "match_desc": "2nd Match",
        "status": "Royal Challengers Bangalore won by 8 wkts"
      },
      "venue_id": 11,
      "team1_id": 61,
      "team2_id": 59,
      "id": 2
    },
    {
      "header": {
        "start_time": "1397817000",
        "match_desc": "3rd Match",
        "status": "Kings XI Punjab won by 6 wkts"
      },
      "venue_id": 10,
      "team1_id": 58,
      "team2_id": 65,
      "id": 3
    },
    {
      "header": {
        "start_time": "1397831400",
        "match_desc": "4th Match",
        "status": "Rajasthan Royals won by 4 wkts"
      },
      "venue_id": 10,
      "team1_id": 255,
      "team2_id": 64,
      "id": 4
    },
    {
      "header": {
        "start_time": "1397903400",
        "match_desc": "5th Match",
        "status": "Royal Challengers Bangalore won by 7 wkts"
      },
      "venue_id": 12,
      "team1_id": 59,
      "team2_id": 62,
      "id": 5
    },
    {
      "header": {
        "start_time": "1397917800",
        "match_desc": "6th Match",
        "status": "Delhi Daredevils won by 4 wkts"
      },
      "venue_id": 12,
      "team1_id": 63,
      "team2_id": 61,
      "id": 6
    },
    {
      "header": {
        "start_time": "1398004200",
        "match_desc": "7th Match",
        "status": "Kings XI Punjab won by 7 wkts"
      },
      "venue_id": 11,
      "team1_id": 64,
      "team2_id": 65,
      "id": 7
    },
    {
      "header": {
        "start_time": "1398090600",
        "match_desc": "8th Match",
        "status": "Chennai Super Kings won by 93 runs"
      },
      "venue_id": 10,
      "team1_id": 58,
      "team2_id": 61,
      "id": 8
    },
    {
      "header": {
        "start_time": "1398177000",
        "match_desc": "9th Match",
        "status": "Kings XI Punjab won by 72 runs"
      },
      "venue_id": 11,
      "team1_id": 65,
      "team2_id": 255,
      "id": 9
    },
    {
      "header": {
        "start_time": "1398263400",
        "match_desc": "10th Match",
        "status": "Chennai Super Kings won by 7 runs"
      },
      "venue_id": 12,
      "team1_id": 64,
      "team2_id": 58,
      "id": 10
    },
    {
      "header": {
        "start_time": "1398349800",
        "match_desc": "11th Match",
        "status": "Kolkata Knight Riders won by 2 runs"
      },
      "venue_id": 11,
      "team1_id": 59,
      "team2_id": 63,
      "id": 11
    },
    {
      "header": {
        "start_time": "1398421800",
        "match_desc": "12th Match",
        "status": "Sunrisers Hyderabad won by 4 runs"
      },
      "venue_id": 12,
      "team1_id": 255,
      "team2_id": 61,
      "id": 12
    },
    {
      "header": {
        "start_time": "1398436200",
        "match_desc": "13th Match",
        "status": "Chennai Super Kings won by 7 wkts"
      },
      "venue_id": 12,
      "team1_id": 58,
      "team2_id": 62,
      "id": 13
    },
    {
      "header": {
        "start_time": "1398508200",
        "match_desc": "14th Match",
        "status": "Rajasthan Royals won by 6 wkts"
      },
      "venue_id": 10,
      "team1_id": 64,
      "team2_id": 59,
      "id": 14
    },
    {
      "header": {
        "start_time": "1398522600",
        "match_desc": "15th Match",
        "status": "Kings XI Punjab won by 23 runs"
      },
      "venue_id": 10,
      "team1_id": 63,
      "team2_id": 65,
      "id": 15
    },
    {
      "header": {
        "start_time": "1398594600",
        "match_desc": "16th Match",
        "status": "Delhi Daredevils won by 6 wkts"
      },
      "venue_id": 11,
      "team1_id": 61,
      "team2_id": 62,
      "id": 16
    },
    {
      "header": {
        "start_time": "1398609000",
        "match_desc": "17th Match",
        "status": "Chennai Super Kings won by 5 wkts"
      },
      "venue_id": 11,
      "team1_id": 255,
      "team2_id": 58,
      "id": 17
    },
    {
      "header": {
        "start_time": "1398695400",
        "match_desc": "18th Match",
        "status": "Kings XI Punjab won by 5 wkts"
      },
      "venue_id": 12,
      "team1_id": 65,
      "team2_id": 59,
      "id": 18
    },
    {
      "header": {
        "start_time": "1398781800",
        "match_desc": "19th Match",
        "status": "Match tied (Rajasthan won the one-over eliminator via boundary countback)"
      },
      "venue_id": 10,
      "team1_id": 63,
      "team2_id": 64,
      "id": 19
    },
    {
      "header": {
        "start_time": "1398868200",
        "match_desc": "20th Match",
        "status": "Sunrisers Hyderabad won by 15 runs"
      },
      "venue_id": 12,
      "team1_id": 62,
      "team2_id": 255,
      "id": 20
    },
    {
      "header": {
        "start_time": "1399041000",
        "match_desc": "21st  Match",
        "status": "Chennai Super Kings won by 34 runs"
      },
      "venue_id": 7,
      "team1_id": 58,
      "team2_id": 63,
      "id": 21
    },
    {
      "header": {
        "start_time": "1399113000",
        "match_desc": "22nd Match",
        "status": "Mumbai Indians won by 5 wkts"
      },
      "venue_id": 1,
      "team1_id": 62,
      "team2_id": 65,
      "id": 22
    },
    {
      "header": {
        "start_time": "1399127400",
        "match_desc": "23rd Match",
        "status": "Rajasthan Royals won by 7 wkts"
      },
      "venue_id": 5,
      "team1_id": 61,
      "team2_id": 64,
      "id": 23
    },
    {
      "header": {
        "start_time": "1399213800",
        "match_desc": "24th Match",
        "status": "Royal Challengers Bangalore won by 4 wkts"
      },
      "venue_id": 4,
      "team1_id": 59,
      "team2_id": 255,
      "id": 24
    },
    {
      "header": {
        "start_time": "1399285800",
        "match_desc": "25th Match",
        "status": "Rajasthan Royals won by 10 runs"
      },
      "venue_id": 3,
      "team1_id": 64,
      "team2_id": 63,
      "id": 25
    },
    {
      "header": {
        "start_time": "1399300200",
        "match_desc": "26th Match",
        "status": "Chennai Super Kings won by 8 wkts"
      },
      "venue_id": 5,
      "team1_id": 61,
      "team2_id": 58,
      "id": 26
    },
    {
      "header": {
        "start_time": "1399386600",
        "match_desc": "27th Match",
        "status": "Mumbai Indians won by 19 runs"
      },
      "venue_id": 1,
      "team1_id": 62,
      "team2_id": 59,
      "id": 27
    },
    {
      "header": {
        "start_time": "1399458600",
        "match_desc": "28th Match",
        "status": "Kolkata Knight Riders won by 8 wkts"
      },
      "venue_id": 5,
      "team1_id": 61,
      "team2_id": 63,
      "id": 28
    },
    {
      "header": {
        "start_time": "1399473000",
        "match_desc": "29th Match",
        "status": "Kings XI Punjab won by 44 runs"
      },
      "venue_id": 2,
      "team1_id": 65,
      "team2_id": 58,
      "id": 29
    },
    {
      "header": {
        "start_time": "1399559400",
        "match_desc": "30th Match",
        "status": "Sunrisers Hyderabad won by 32 runs"
      },
      "venue_id": 3,
      "team1_id": 64,
      "team2_id": 255,
      "id": 30
    },
    {
      "header": {
        "start_time": "1399645800",
        "match_desc": "31st Match",
        "status": "Kings XI Punjab won by 32 runs"
      },
      "venue_id": 4,
      "team1_id": 59,
      "team2_id": 65,
      "id": 31
    },
    {
      "header": {
        "start_time": "1399717800",
        "match_desc": "32nd Match",
        "status": "Hyderabad won by 8 wkts (D/L method)"
      },
      "venue_id": 5,
      "team1_id": 61,
      "team2_id": 255,
      "id": 32
    },
    {
      "header": {
        "start_time": "1399732200",
        "match_desc": "33rd Match",
        "status": "Chennai Super Kings won by 4 wkts"
      },
      "venue_id": 1,
      "team1_id": 62,
      "team2_id": 58,
      "id": 33
    },
    {
      "header": {
        "start_time": "1399804200",
        "match_desc": "34th Match",
        "status": "Kolkata Knight Riders won by 9 wkts"
      },
      "venue_id": 2,
      "team1_id": 65,
      "team2_id": 63,
      "id": 34
    },
    {
      "header": {
        "start_time": "1399818600",
        "match_desc": "35th Match",
        "status": "Rajasthan Royals won by 5 wkts"
      },
      "venue_id": 4,
      "team1_id": 59,
      "team2_id": 64,
      "id": 35
    },
    {
      "header": {
        "start_time": "1399905000",
        "match_desc": "36th Match",
        "status": "Mumbai Indians won by 7 wkts"
      },
      "venue_id": 6,
      "team1_id": 255,
      "team2_id": 62,
      "id": 36
    },
    {
      "header": {
        "start_time": "1399977000",
        "match_desc": "37th Match",
        "status": "Chennai Super Kings won by 5 wkts"
      },
      "venue_id": 7,
      "team1_id": 58,
      "team2_id": 64,
      "id": 37
    },
    {
      "header": {
        "start_time": "1399991400",
        "match_desc": "38th Match",
        "status": "Royal Challengers Bangalore won by 16 runs"
      },
      "venue_id": 4,
      "team1_id": 59,
      "team2_id": 61,
      "id": 38
    },
    {
      "header": {
        "start_time": "1400063400",
        "match_desc": "39th Match",
        "status": "Kings XI Punjab won by 6 wkts"
      },
      "venue_id": 6,
      "team1_id": 255,
      "team2_id": 65,
      "id": 39
    },
    {
      "header": {
        "start_time": "1400077800",
        "match_desc": "40th Match",
        "status": "Kolkata Knight Riders won by 6 wkts"
      },
      "venue_id": 2,
      "team1_id": 63,
      "team2_id": 62,
      "id": 40
    },
    {
      "header": {
        "start_time": "1400164200",
        "match_desc": "41st Match",
        "status": "Rajasthan Royals won by 62 runs"
      },
      "venue_id": 3,
      "team1_id": 64,
      "team2_id": 61,
      "id": 41
    },
    {
      "header": {
        "start_time": "1400409000",
        "match_desc": "42nd Match",
        "status": "Royal Challengers Bangalore won by 5 wkts"
      },
      "venue_id": 7,
      "team1_id": 58,
      "team2_id": 59,
      "id": 42
    },
    {
      "header": {
        "start_time": "1400423400",
        "match_desc": "43rd Match",
        "status": "Kolkata Knight Riders won by 7 wkts"
      },
      "venue_id": 6,
      "team1_id": 255,
      "team2_id": 63,
      "id": 43
    },
    {
      "header": {
        "start_time": "1400495400",
        "match_desc": "44th Match",
        "status": "Mumbai Indians won by 25 runs"
      },
      "venue_id": 3,
      "team1_id": 64,
      "team2_id": 62,
      "id": 44
    },
    {
      "header": {
        "start_time": "1400509800",
        "match_desc": "45th Match",
        "status": "Kings XI Punjab won by 4 wkts"
      },
      "venue_id": 5,
      "team1_id": 61,
      "team2_id": 65,
      "id": 45
    },
    {
      "header": {
        "start_time": "1400581800",
        "match_desc": "46th Match",
        "status": "Sunrisers Hyderabad won by 7 wkts"
      },
      "venue_id": 6,
      "team1_id": 255,
      "team2_id": 59,
      "id": 46
    },
    {
      "header": {
        "start_time": "1400596200",
        "match_desc": "47th Match",
        "status": "Kolkata Knight Riders won by 8 wkts"
      },
      "venue_id": 9,
      "team1_id": 63,
      "team2_id": 58,
      "id": 47
    },
    {
      "header": {
        "start_time": "1400682600",
        "match_desc": "48th Match",
        "status": "Mumbai Indians won by 7 wkts"
      },
      "venue_id": 8,
      "team1_id": 65,
      "team2_id": 62,
      "id": 48
    },
    {
      "header": {
        "start_time": "1400754600",
        "match_desc": "49th Match",
        "status": "Kolkata Knight Riders won by 30 runs"
      },
      "venue_id": 9,
      "team1_id": 63,
      "team2_id": 59,
      "id": 49
    },
    {
      "header": {
        "start_time": "1400769000",
        "match_desc": "50th Match",
        "status": "Sunrisers Hyderabad won by 6 wkts"
      },
      "venue_id": 7,
      "team1_id": 58,
      "team2_id": 255,
      "id": 50
    },
    {
      "header": {
        "start_time": "1400841000",
        "match_desc": "51st Match",
        "status": "Mumbai Indians won by 15 runs"
      },
      "venue_id": 1,
      "team1_id": 62,
      "team2_id": 61,
      "id": 51
    },
    {
      "header": {
        "start_time": "1400855400",
        "match_desc": "52nd Match",
        "status": "Kings XI Punjab won by 16 runs"
      },
      "venue_id": 8,
      "team1_id": 65,
      "team2_id": 64,
      "id": 52
    },
    {
      "header": {
        "start_time": "1400927400",
        "match_desc": "53rd Match",
        "status": "Chennai Super Kings won by 8 wkts"
      },
      "venue_id": 4,
      "team1_id": 59,
      "team2_id": 58,
      "id": 53
    },
    {
      "header": {
        "start_time": "1400941800",
        "match_desc": "54th Match",
        "status": "Kolkata Knight Riders won by 4 wkts"
      },
      "venue_id": 9,
      "team1_id": 63,
      "team2_id": 255,
      "id": 54
    },
    {
      "header": {
        "start_time": "1401013800",
        "match_desc": "55th Match",
        "status": "Kings XI Punjab won by 7 wkts"
      },
      "venue_id": 8,
      "team1_id": 65,
      "team2_id": 61,
      "id": 55
    },
    {
      "header": {
        "start_time": "1401028200",
        "match_desc": "56th Match",
        "status": "Mumbai Indians won by 5 wkts"
      },
      "venue_id": 1,
      "team1_id": 62,
      "team2_id": 64,
      "id": 56
    },
    {
      "header": {
        "start_time": "1401273000",
        "match_desc": "Qualifier 1",
        "status": "Kolkata Knight Riders won by 28 runs"
      },
      "venue_id": 9,
      "team1_id": 65,
      "team2_id": 63,
      "id": 57
    },
    {
      "header": {
        "start_time": "1401287400",
        "match_desc": "Eliminator",
        "status": "Chennai Super Kings won by 7 wkts"
      },
      "venue_id": 1,
      "team1_id": 58,
      "team2_id": 62,
      "id": 58
    },
    {
      "header": {
        "start_time": "1401460200",
        "match_desc": "Qualifier 2",
        "status": "Kings XI Punjab won by 24 runs"
      },
      "venue_id": 1,
      "team1_id": 65,
      "team2_id": 58,
      "id": 59
    },
    {
      "header": {
        "start_time": "1401633000",
        "match_desc": "Final",
        "status": "Kolkata Knight Riders won by 3 wkts"
      },
      "venue_id": 4,
      "team1_id": 63,
      "team2_id": 65,
      "id": 60
    }
  ]

  $scope.venueKey = 1;
  $scope.getVenueName=function(venueID)
  {
    var venueName=""
    //
    angular.forEach($scope.venues, function(value, key){
      //
      if(key == venueID)
      {
        //
        venueName=value.name;
        //
        //return venueName
      }
      //  return venueName;
    })
    return venueName;
  };

  $scope.getTeamName=function(teamID)
  {
    var teamName=""
    angular.forEach($scope.teams,function(value,key)
    {

      if(key==teamID)
      {
        teamName=value.s_name;

      }

    })

    return teamName;
  };

  $scope.getFullTeamName=function(teamID)
  {
    var fullTeamName=""
    angular.forEach($scope.teams,function(value,key)
    {

      if(key==teamID)
      {
        fullTeamName=value.name;

      }

    })

    return fullTeamName;
  };

  $scope.filterVenue=function(vID)
  {
    var filteredMatches=[]

    angular.forEach($scope.matches, function(value, key){
      //

      if(value.venue_id == vID)
      {
        filteredMatches.push(value);

        $scope.matches=filteredMatches;



      }
      //  return venueName;
    })
  }
  $scope.resetVenue=function()
  {
    $scope.venueFlag=false;
    $scope.selected = -1;

  }
  $scope.resetTeam=function()
  {
    $scope.teamFlag=false;
    $scope.selectedt = -1;
  }

  $scope.click=function(){

    $scope.enabled=true;
  };

  $scope.flag=function(value)
  {
    $scope.venueKey = value;
    $scope.venueFlag=true;

  }

  $scope.tflag=function(value)
  {
    $scope.teamKey = value;
    $scope.teamFlag=true;
  }
  $scope.myFunction=function(indexVal) {

    $scope.selected = indexVal;
  }
  $scope.myFunctionT=function(indexVal) {

    $scope.selectedt = indexVal;
  }

  $scope.setFavTeam=function(favTeamID)
  {
    console.log("in fav team")
    if(favTeamID!==null && favTeamID!=="" )
    {
      $scope.teamFlag=true;
      $scope.teamKey=favTeamID;
      $scope.favTeamFlag=true;
      var favTeamName=$scope.getFullTeamName(favTeamID);
      $scope.ft=favTeamName;
      $scope.ftOnload=favTeamName;
      $scope.favTeamMsg=true;

      if (window.localStorage) {
        window.localStorage.setItem('favTeam', favTeamID);
      }


      /*$localStorage.favTeam=favTeamID;
      console.log('it is ',typeof favTeamID);
      console.log($localStorage.favTeam);*/
    }
  }

  $scope.checkFavTeam=function()
  {
    if( window.localStorage && window.localStorage.getItem('favTeam') && window.localStorage.getItem('favTeam')!==null ) {
      var favTeam = parseInt(window.localStorage.getItem('favTeam'));
      var favTeamNameOnLoad = $scope.getFullTeamName(favTeam);
      $scope.teamFlag=true;
      $scope.teamKey = parseInt(favTeam);
    //  $scope.teamKey=parseInt($localStorage.favTeam);
      $scope.favTeamMsg=true;
    //  var favTeamNameOnLoad=$scope.getFullTeamName(parseInt($localStorage.favTeam));
      $scope.ftOnload=favTeamNameOnLoad;
    }
  //  console.log("$localStorage.favTeam" + $localStorage.favTeam)
    /*  if($localStorage.favTeam!==null && $localStorage.favTeam!=="" && undefined!=$localStorage.favTeam )
      {
        $scope.teamFlag=true;
        $scope.teamKey=parseInt($localStorage.favTeam);
        $scope.favTeamMsg=true;
        var favTeamNameOnLoad=$scope.getFullTeamName(parseInt($localStorage.favTeam));
        $scope.ftOnload=favTeamNameOnLoad

      }*/
  }

  $scope.removefavTeam=function()
  {
    window.localStorage.removeItem('favTeam');
//    $localStorage.favTeam=undefined;
    $scope.teamFlag=false;
    $scope.favTeamMsg=false;
    $scope.favTeamFlag=false;
    $scope.selectedValue="";
  }
});

app.filter('filterVenue', function() {
  //  var fm = [];


  return function(items, vkey, venueFlag,tKey,teamFlag) {
    if(venueFlag==true && teamFlag!=true)
    {
      var fm = [];
      for (var i = 0; i < items.length; i++){
        var item = items[i];
        if(item.venue_id === parseInt(vkey) )
        fm.push(item);
      }
      return fm;
    }
    else if(teamFlag==true && venueFlag!=true )
    {
      var fmt = [];
      for (var i = 0; i < items.length; i++){
        var item = items[i];
        if(item.team1_id === parseInt(tKey) || item.team2_id === parseInt(tKey))
        fmt.push(item);
      }
      return fmt;
    }
    else if(teamFlag==true && venueFlag==true )
    {

      var fmboth=[];
      for (var i = 0; i < items.length; i++){
        var item = items[i];
        if((item.team1_id === parseInt(tKey) || item.team2_id === parseInt(tKey)) && item.venue_id === parseInt(vkey))
        fmboth.push(item);
      }
      return fmboth;

    }

    else {
      return items;
    }
  }
});

app.filter('ordinal', function(){
  return function(number){
    if(isNaN(number) || number < 1){
      return number;
    } else {
      var lastDigit = number % 10;

      if(lastDigit === 1){
        return number + 'st Match'
      } else if(lastDigit === 2){
        return number + 'nd Match'
      } else if (lastDigit === 3){
        return number + 'rd Match'
      } else if (lastDigit > 3 || lastDigit ===0 ){
        return number + 'th Match'
      }
    }
  }
});
