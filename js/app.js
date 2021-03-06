var twitchApp = angular.module("twitchApp", []);
var users = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
];

var channels = [
  "freecodecamp",
  "test_channel",
  "ESL_SC2",
  "OgamingSC2",
  "ukmasters",
];
twitchApp.controller(
  "ChannelController",
  function ChannelController($scope, $http, $sce) {
    var channels = [
      "freecodecamp",
      "test_channel",
      "cretetion",
      "storbeck",
      "habathcx",
      "RobotCaleb",
      "noobs2ninjas",
    ];
    $scope.channelsModel = [];
    $scope.streamModel = [];
    channels.forEach(function (channel) {
      function makeURL(type, id) {
        return "https://wind-bow.gomix.me/twitch-api/" + type + "/" + id;
      }
      var url = makeURL("streams", channel);
      var trustedUrl = $sce.trustAsResourceUrl(url);
      $http.jsonp(trustedUrl, { jsonpCallbackParam: "callback" }).then(
        function successCallback(response) {
          if (response.data.stream !== null) {
            $scope.streamModel.push(response.data);
            //refactor
            var url = makeURL("channels", channel);
            var trustedUrl = $sce.trustAsResourceUrl(url);
            channelRequest(trustedUrl, "Online");
          } else if (response.data.stream === null) {
            onlineStatus = "Offline";
            var url = makeURL("channels", channel);
            var trustedUrl = $sce.trustAsResourceUrl(url);
            channelRequest(trustedUrl, onlineStatus);
          } else if (response.data.stream === undefined) {
            onlineStatus = "Account Closed";
          }
        },
        function errorCallback(response) {
          console.error(response);
        }
      );

      function channelRequest(trustedUrl, onlineStatus) {
        $http.jsonp(trustedUrl, { jsonpCallbackParam: "callback" }).then(
          function successCallback(response) {
            response.data.onlinestatus = onlineStatus;
            if (response.data.video_banner === null) {
              response.data.video_banner =
                "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/no-banner.png";
            }
            if (response.data.logo === null) {
              response.data.logo =
                "https://dummyimage.com/300x300/6441a4/fcfcfc.png&text=6c6f676f0d0a";
            }
            $scope.channelsModel.push(response.data);
          },
          function errorCallback(response) {
            console.error(response);
          }
        );
      }
    });

    $scope.channels = [
      {
        status: "Some GoLang Today #go #golang #youtube",
        display_name: "FreeCodeCamp",
        name: "freecodecamp",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
        video_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
        profile_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
        url: "https://www.twitch.tv/freecodecamp",
        views: 189385,
        followers: 10989,
        _id: 79776140,
        live: true,
      },
      {
        status: "Some GoLang Today #go #golang #youtube",
        display_name: "FreeCodeCamp",
        name: "freecodecamp",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
        video_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
        profile_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
        url: "https://www.twitch.tv/freecodecamp",
        views: 189385,
        followers: 10989,
        _id: 1,

        live: true,
      },
      {
        status: "Some GoLang Today #go #golang #youtube",
        display_name: "FreeCodeCamp",
        name: "freecodecamp",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
        video_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
        profile_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
        url: "https://www.twitch.tv/freecodecamp",
        views: 189385,
        followers: 10989,
        _id: 0,
        live: true,
      },
    ];
  }
);

twitchApp.controller(
  "PopularLiveGameComponent",
  function LiveGameComponent($scope) {
    $scope.popularlivegames = [
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "auronplay",
        game: "Among Us",
        viewers: " 125,513",
      },

      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "ZeratoR",
        game: " Special Events",
        viewers: "79,746",
      },
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "csgomc_ru",
        game: "Counter-Strike: Global Offensive",
        viewers: "62,959",
      },
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "RocketLeague",
        game: "Rocket League",
        viewers: "61,183",
      },
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "Etoiles",
        game: "Rocket League",
        viewers: "61,183",
      },
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "Etoiles",
        game: "Special Events",
        viewers: "46,923",
      },
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "Squeezie",
        game: "Special Events",
        viewers: "43,559",
      },
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "benjyfishy",
        game: "Fortnite",
        viewers: "33,217",
      },
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "Mongraal",
        game: "Fortnite",
        viewers: "32,042",
      },
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "DreamHackCS",
        game: "Counter-Strike: Global Offensive",
        viewers: "28,370",
      },
      {
        image:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/profile.jpg",
        username: "dota2mc_ru",
        game: "Dota 2",
        viewers: "23,713",
      },
    ];
  }
);

twitchApp.controller("LiveGameComponent", function LiveGameComponent($scope) {
  $scope.livegames = [
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/stream.jpg",
      username: "Riot Games",
      title: "Worlds Cooldown | Quarterfinals |",
      game: "League of Legends",
      tags: ["Esports", "English"],
    },

    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/stream.jpg",
      username: "ibai",
      title: "  WORLDS 2020 | TES VS FNATIC |",
      game: "League of Legends",
      tags: ["Spanish"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/stream.jpg",
      username: "LVPes",
      title: "LEAGUE OF LEGENDS - WORLDS",
      game: "League of Legends",
      tags: ["Esports", "Spanish"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/stream.jpg",
      username: "LCK_Korea",
      title: "[2020 LoL 월드 챔피언십] 8강전 3일차 -",
      game: "Among Us",
      tags: ["Esports", "English"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/stream.jpg",
      username: "auronplay",
      title: "Worlds Cooldown | Quarterfinals |",
      game: "Among Us",
      tags: ["Spanish"],
    },
  ];
});

twitchApp.controller("FavGameComponent", function FavGameComponent($scope) {
  $scope.games = [
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/League-of-Legends.jpg",
      title: "League of Legends",
      viewers: "1,266,932",
      tags: ["MOBA", "Action"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/Special-Events.jpg",
      title: "Special Events",
      viewers: "223,522",
      tags: ["IRL"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/Just-Chatting.jpg",
      title: "Just Chatting",
      viewers: "167,380",
      tags: ["IRL"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/FIFA-21.jpg",
      title: "FIFA 21",
      viewers: "96,532",
      tags: ["Sports Game", "Action"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/Counter-Strike-Global-Offensive.jpg",
      title: "Counter-Strike Global Offensive",
      viewers: "66,863",
      tags: ["FPS", "Shooter"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/Among-Us.jpg",
      title: "Among Us",
      viewers: "65,445",
      tags: ["Strategy", "Survival"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/Fortnite.jpg",
      title: "Fortnite",
      viewers: "70,703",
      tags: ["Shooter", "Action"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/Dota-2.jpg",
      title: "Dota 2",
      viewers: "52,868",
      tags: ["MOBA", "Action"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/Call-Of-Duty-Modern-Warfare.jpg",
      title: "Call-Of-Duty-Modern-Warfare",
      viewers: "56,203",
      tags: ["FPS", "Shooter"],
    },
    {
      image:
        "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API/img/categories/Apex-Legends.jpg",
      title: "Apex Legends",
      viewers: "45,654",
      tags: ["FPS", "Shooter"],
    },
  ];
});

twitchApp.controller("StreamComponent", function StreamComponent($scope) {
  $scope.streams = [
    {
      game: "BATMAN - The Telltale Series",
      viewers: 7254,
      preview: {
        small:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-80x45.jpg",
        medium:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-320x180.jpg",
        large:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-640x360.jpg",
        template:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-{width}x{height}.jpg",
      },
      channel: {
        mature: false,
        status: "Dan is Batman? - Telltale's Batman",
        broadcaster_language: "en",
        display_name: "DansGaming",
        name: "dansgaming",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/dansgaming-profile_image-76e4a4ab9388bc9c-300x300.png",
        video_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/dansgaming-channel_offline_image-d3551503c24c08ad-1920x1080.png",
        profile_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/dansgaming-profile_banner-4c2b8ece8cd010b4-480.jpeg",
        url: "https://www.twitch.tv/dansgaming",
        views: 63906830,
        followers: 538598,
      },
    },
  ];
  $scope.setStream = function () {};
});
