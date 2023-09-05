(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_73F85460_5C77_0862_41C8_5FB9D6B0B621",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_73621338_5C77_09E2_41B9_C33772745168",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 151.09,
   "backwardYaw": -4.91,
   "distance": 1,
   "panorama": "this.panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -4.09,
   "backwardYaw": 89.18,
   "distance": 1,
   "panorama": "this.panorama_55C51042_5BD3_08DF_41AC_31963ADA2327"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005",
 "thumbnailUrl": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_t.jpg",
 "pitch": 0,
 "label": "20230903_222154_588",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4AC5258F_5BD1_0866_41D4_CA467B2383AF",
  "this.overlay_4E37AE6A_5BF1_18AE_4194_2602B7067F69",
  "this.overlay_4EE1B7FE_5BF1_77A9_41C9_71D09FF72E08",
  "this.overlay_4EDFE2F0_5BEF_09BA_41BA_7D7EC4A87E22",
  "this.overlay_4ED5C8D5_5BD1_79FB_41A2_995078315E28",
  "this.popup_43BDC2D0_5BD3_09FA_41C2_56577FE66E31",
  "this.popup_43267CDA_5BD7_39EE_41D0_426212A09C5B",
  "this.popup_74522DC3_5C73_18A6_41C9_3BD82D80079E"
 ]
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_55C51042_5BD3_08DF_41AC_31963ADA2327",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_camera"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE",
   "start": "this.changeBackgroundWhilePlay(this.mainPlayList, 7, '#000000')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4",
   "camera": "this.panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "Photo",
 "label": "IMG_20230831_134521",
 "duration": 5000,
 "thumbnailUrl": "media/album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_2_t.jpg",
 "width": 4000,
 "id": "album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_2.jpg"
   }
  ]
 },
 "height": 3000
},
{
 "class": "ImageResource",
 "id": "ImageResource_776E87CF_5C71_08BE_41C6_29CF79FF30ED",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7BB7C211_5C71_0BA2_41D1_14DF4366BB35_0_0.jpg",
   "width": 720,
   "height": 1280
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7BB7C211_5C71_0BA2_41D1_14DF4366BB35_0_1.jpg",
   "width": 576,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7BB7C211_5C71_0BA2_41D1_14DF4366BB35_0_2.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_776CD7D1_5C71_08A2_41AF_C8FEAB87173A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7B9F0D1B_5C71_F9A6_41D6_87123C4254BD_0_0.jpg",
   "width": 720,
   "height": 1280
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7B9F0D1B_5C71_F9A6_41D6_87123C4254BD_0_1.jpg",
   "width": 576,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_7B9F0D1B_5C71_F9A6_41D6_87123C4254BD_0_2.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_46E2EA5E_5BB1_38E6_4190_EDD2E1011D3F",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingTop": 5,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "title": "Warung Rabeg & Pindang Mang Sam",
 "titleFontSize": "1.29vmin",
 "modal": true,
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "bold",
 "footerHeight": 5,
 "height": 600,
 "closeButtonBackgroundColor": [],
 "veilColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "propagateClick": false,
 "class": "Window",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "layout": "vertical",
 "children": [
  "this.htmlText_46E03A64_5BB1_38DA_41C9_654EDC9A9EAE"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadow": true,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "shadowHorizontalLength": 3,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingBottom": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window48764"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "borderRadius": 5,
 "shadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000",
 "closeButtonBackgroundColorRatios": []
},
{
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.87,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_43BDC2D0_5BD3_09FA_41C2_56577FE66E31_0_2.jpg",
    "width": 576,
    "height": 1024
   }
  ]
 },
 "pitch": -6.14,
 "yaw": -71.59,
 "id": "popup_43BDC2D0_5BD3_09FA_41C2_56577FE66E31",
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_7760A7D9_5C71_08A2_41A4_4B80638B4E22",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74522DC3_5C73_18A6_41C9_3BD82D80079E_0_0.jpg",
   "width": 960,
   "height": 1280
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74522DC3_5C73_18A6_41C9_3BD82D80079E_0_1.jpg",
   "width": 768,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_74522DC3_5C73_18A6_41C9_3BD82D80079E_0_2.jpg",
   "width": 384,
   "height": 512
  }
 ]
},
{
 "class": "Photo",
 "label": "IMG_20230831_134512",
 "duration": 5000,
 "data": "Rabeg Sapi",
 "thumbnailUrl": "media/album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_0_t.jpg",
 "width": 3000,
 "id": "album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_0",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_0.jpg"
   }
  ]
 },
 "height": 4000
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.32,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_73BDA3B5_5C77_08E2_41D0_21909FBFADCC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.11,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_72D29175_5C77_0862_41C9_71E9BC48782F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.64,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": 7.77,
    "pitchSpeed": 22.55,
    "path": "shortest",
    "targetYaw": -17.59,
    "yawSpeed": 44.3,
    "easing": "cubic_in_out"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -6.14,
    "pitchSpeed": 17.05,
    "path": "shortest",
    "targetYaw": -145.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_731BA1FF_5C77_085E_41D6_EA11F6DA4004",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_72E9A1E0_5C77_0862_41D1_CDADF7ECEBE6",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 10.23,
   "backwardYaw": -147.55,
   "distance": 1,
   "panorama": "this.panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0",
 "thumbnailUrl": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_t.jpg",
 "pitch": 0,
 "label": "20230903_222135_946",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4F943B62_5BF3_18DE_41B9_703D70F870A1",
  "this.overlay_4029F965_5BB1_18DA_41D0_103C2B3A3635"
 ]
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_20230831_134512",
 "id": "album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE",
 "thumbnailUrl": "media/album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_t.png",
 "playList": "this.album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_AlbumPlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -2.05,
   "backwardYaw": 81,
   "distance": 1,
   "panorama": "this.panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 89.18,
   "backwardYaw": -4.09,
   "distance": 1,
   "panorama": "this.panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_55C51042_5BD3_08DF_41AC_31963ADA2327",
 "thumbnailUrl": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_t.jpg",
 "pitch": 0,
 "label": "20230903_222151_277",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_49D1200D_5BDF_086B_41D6_057952215760",
  "this.overlay_4888FFB1_5BDF_37BA_4190_08C6A002B815"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.82,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7383C386_5C77_08AE_41D3_B2A021BBE20E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7340E2E9_5C77_0862_41C3_9DF96A72BD77",
 "automaticZoomSpeed": 10
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.52,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "path": "shortest",
    "targetYaw": -92.86,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_73AD93D4_5C77_08A2_41BF_6D7D6A2D8A27",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.55,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 32.45,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": 7.77,
    "pitchSpeed": 7.33,
    "path": "shortest",
    "targetYaw": -17.59,
    "yawSpeed": 13.72,
    "easing": "cubic_in_out"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -6.14,
    "pitchSpeed": 17.05,
    "path": "shortest",
    "targetYaw": -145.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_72A9412B_5C77_09E6_41C3_C9A8970BBC6E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.82,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_72F931B1_5C77_08E2_41C3_FFB3ADB6F861",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_425FD488_5BD1_086A_41CC_F8DCF43210C8",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_43267CDA_5BD7_39EE_41D0_426212A09C5B_0_0.jpg",
   "width": 3264,
   "height": 2448
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_43267CDA_5BD7_39EE_41D0_426212A09C5B_0_1.jpg",
   "width": 2048,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_43267CDA_5BD7_39EE_41D0_426212A09C5B_0_2.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_43267CDA_5BD7_39EE_41D0_426212A09C5B_0_3.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 90,
   "backwardYaw": 87.55,
   "distance": 1,
   "panorama": "this.panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 17.18,
   "backwardYaw": 15.95,
   "distance": 1,
   "panorama": "this.panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 159.68,
   "backwardYaw": -1.23,
   "distance": 1,
   "panorama": "this.panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D",
 "thumbnailUrl": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_t.jpg",
 "pitch": 0,
 "label": "20230903_222144_838",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_488CC79D_5BD3_086B_41C0_F1B0CCAE9286",
  "this.overlay_4F8F6703_5BD1_085F_41CC_5721D03EFC64",
  "this.overlay_48571674_5BD1_08BA_41B5_2D10D1EA377F",
  "this.overlay_4E2D68BE_5BD1_19A6_41D0_C69DA8780453",
  "this.popup_7B9F0D1B_5C71_F9A6_41D6_87123C4254BD"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.91,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_73E88480_5C77_08A2_41CF_6C29D08BF4E0",
 "automaticZoomSpeed": 10
},
{
 "class": "Photo",
 "label": "IMG_20230831_134515",
 "duration": 5000,
 "data": "Rabeg Kambing",
 "thumbnailUrl": "media/album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_1_t.jpg",
 "width": 3000,
 "id": "album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_1.jpg"
   }
  ]
 },
 "height": 4000
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.23,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_73721318_5C77_09A2_41CF_825F53DE0ED9",
 "automaticZoomSpeed": 10
},
{
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.71,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_7B9F0D1B_5C71_F9A6_41D6_87123C4254BD_0_1.jpg",
    "width": 576,
    "height": 1024
   }
  ]
 },
 "pitch": -13.5,
 "yaw": 67.5,
 "id": "popup_7B9F0D1B_5C71_F9A6_41D6_87123C4254BD",
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.23,
   "backwardYaw": 159.68,
   "distance": 1,
   "panorama": "this.panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -165.89,
   "backwardYaw": -93.48,
   "distance": 1,
   "panorama": "this.panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 81,
   "backwardYaw": -2.05,
   "distance": 1,
   "panorama": "this.panorama_55C51042_5BD3_08DF_41AC_31963ADA2327"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC",
 "thumbnailUrl": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_t.jpg",
 "pitch": 0,
 "label": "20230903_222147_708",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_48C01CC3_5BD1_79DE_41D1_6666ECA70F4A",
  "this.overlay_4F8A2784_5BD1_085A_41B3_A279BF0DCAAB",
  "this.overlay_4ECB17F4_5BD1_37BA_41CA_B2F2A520DED7"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_425F748A_5BD1_086E_41CD_81F60260FF5A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_43BDC2D0_5BD3_09FA_41C2_56577FE66E31_0_0.jpg",
   "width": 2296,
   "height": 4080
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_43BDC2D0_5BD3_09FA_41C2_56577FE66E31_0_1.jpg",
   "width": 1152,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_43BDC2D0_5BD3_09FA_41C2_56577FE66E31_0_2.jpg",
   "width": 576,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_43BDC2D0_5BD3_09FA_41C2_56577FE66E31_0_3.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.79,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_7BB7C211_5C71_0BA2_41D1_14DF4366BB35_0_1.jpg",
    "width": 576,
    "height": 1024
   }
  ]
 },
 "pitch": -10.23,
 "yaw": 103.09,
 "id": "popup_7BB7C211_5C71_0BA2_41D1_14DF4366BB35",
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -164.05,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": 7.77,
    "pitchSpeed": 19.33,
    "path": "shortest",
    "targetYaw": -17.59,
    "yawSpeed": 37.84,
    "easing": "cubic_in_out"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -6.14,
    "pitchSpeed": 17.05,
    "path": "shortest",
    "targetYaw": -145.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_732722AB_5C77_08E6_41D4_EA95C956A282",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7393D366_5C77_086E_41C2_676E8A4B8179",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.45,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7336C27C_5C77_0862_41CF_0452B96B83DA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.95,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_73CF3432_5C77_0FE6_41CD_4B5977C38E01",
 "automaticZoomSpeed": 10
},
{
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.55,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_74522DC3_5C73_18A6_41C9_3BD82D80079E_0_1.jpg",
    "width": 768,
    "height": 1024
   }
  ]
 },
 "pitch": -21.68,
 "yaw": 58.5,
 "id": "popup_74522DC3_5C73_18A6_41C9_3BD82D80079E",
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.68,
  "pitch": -4.91
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.86,
  "pitch": -2.45
 },
 "id": "panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.05,
  "pitch": -3.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 12.15,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_43267CDA_5BD7_39EE_41D0_426212A09C5B_0_2.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": -8.18,
 "yaw": 83.45,
 "id": "popup_43267CDA_5BD7_39EE_41D0_426212A09C5B",
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.59,
  "pitch": 7.77
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -6.14,
    "pitchSpeed": 17.05,
    "path": "shortest",
    "targetYaw": -145.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 87.55,
   "backwardYaw": 90,
   "distance": 1,
   "panorama": "this.panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 145.77,
   "backwardYaw": -25.36,
   "distance": 1,
   "panorama": "this.panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -4.91,
   "backwardYaw": 151.09,
   "distance": 1,
   "panorama": "this.panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443",
 "thumbnailUrl": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_t.jpg",
 "pitch": 0,
 "label": "20230903_222142_015",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_48CC8B06_5BD1_3866_41AC_DE698E58E641",
  "this.overlay_4903A338_5BD1_08A9_41D1_56269C92C7DC",
  "this.overlay_49215821_5BEF_385A_41B0_58DDDE392C1D",
  "this.overlay_4E94D90E_5BD7_7866_41D0_10D9D978A15B",
  "this.popup_7BB7C211_5C71_0BA2_41D1_14DF4366BB35"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -93.48,
   "backwardYaw": -165.89,
   "distance": 1,
   "panorama": "this.panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4",
 "thumbnailUrl": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_t.jpg",
 "pitch": 0,
 "label": "20230903_222129_493",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7FEA42B1_5C57_08E5_41D1_570AE468C77C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -25.36,
   "backwardYaw": 145.77,
   "distance": 1,
   "panorama": "this.panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -147.55,
   "backwardYaw": 10.23,
   "distance": 1,
   "panorama": "this.panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 128.59,
   "backwardYaw": 10.23,
   "distance": 1,
   "panorama": "this.panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 15.95,
   "backwardYaw": 17.18,
   "distance": 1,
   "panorama": "this.panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A",
 "thumbnailUrl": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_t.jpg",
 "pitch": 0,
 "label": "20230903_222138_938",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4F5C6FD3_5BF1_17FE_41B2_45BB6A3197B2",
  "this.overlay_4FDC2187_5BF1_0866_41C1_82839C901171",
  "this.overlay_4F41D7A1_5BF1_085B_41D3_B42E8AF757E8",
  "this.overlay_4FB0822A_5BF7_08AE_41C4_273FF91CF11E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.91,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7305324D_5C77_0BA2_41CB_728CA06001E8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.09,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_72CF0192_5C77_08A6_41C6_443E929045B6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.68,
  "pitch": -7.77
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_camera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "transitionMode": "blending",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "paddingLeft": 0,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "shadow": false,
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.55,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "data": {
  "name": "UIComponent60496"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 0
},
{
 "paddingLeft": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "shadow": false,
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "data": {
  "name": "ZoomImage60497"
 },
 "visible": false,
 "propagateClick": false,
 "scaleMode": "custom",
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "minHeight": 0
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "rollOverIconColor": "#666666",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 5,
 "id": "closeButtonPopupPanorama",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "minWidth": 0,
 "iconHeight": 20,
 "shadow": false,
 "verticalAlign": "middle",
 "top": 10,
 "borderColor": "#000000",
 "iconColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 5,
 "mode": "push",
 "fontSize": "1.29vmin",
 "iconLineWidth": 5,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingBottom": 5,
 "label": "",
 "pressedIconColor": "#888888",
 "paddingTop": 5,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "class": "CloseButton",
 "fontStyle": "normal",
 "iconWidth": 20,
 "shadowSpread": 1,
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "fontWeight": "normal",
 "cursor": "hand",
 "minHeight": 0,
 "data": {
  "name": "CloseButton60498"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C51042_5BD3_08DF_41AC_31963ADA2327, this.camera_72F931B1_5C77_08E2_41C3_FFB3ADB6F861); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.13,
   "image": "this.AnimatedImageResource_4CACC5A8_5BF3_0BAA_41D6_F54FFEAA94AD",
   "pitch": -30.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -4.09,
   "distance": 100
  }
 ],
 "id": "overlay_4AC5258F_5BD1_0866_41D4_CA467B2383AF",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.13,
   "yaw": -4.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -30.27
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443, this.camera_72CF0192_5C77_08A6_41C6_443E929045B6); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_4CDF1E55_5BD1_18FA_41C3_6B08C91383E2",
   "pitch": -49.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 151.09,
   "distance": 50
  }
 ],
 "id": "overlay_4E37AE6A_5BF1_18AE_4194_2602B7067F69",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.5,
   "yaw": 151.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -49.09
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_43267CDA_5BD7_39EE_41D0_426212A09C5B, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_425FD488_5BD1_086A_41CC_F8DCF43210C8, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0_HS_3_0.png",
      "width": 207,
      "height": 207
     }
    ]
   },
   "pitch": -8.18,
   "yaw": 83.45
  }
 ],
 "id": "overlay_4EE1B7FE_5BF1_77A9_41C9_71D09FF72E08",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.15,
   "yaw": 83.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.18
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_43BDC2D0_5BD3_09FA_41C2_56577FE66E31, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_425F748A_5BD1_086E_41CD_81F60260FF5A, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0_HS_4_0.png",
      "width": 207,
      "height": 207
     }
    ]
   },
   "pitch": -6.14,
   "yaw": -71.59
  }
 ],
 "id": "overlay_4EDFE2F0_5BEF_09BA_41BA_7D7EC4A87E22",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.2,
   "yaw": -71.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.14
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_74522DC3_5C73_18A6_41C9_3BD82D80079E, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_7760A7D9_5C71_08A2_41A4_4B80638B4E22, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0_HS_5_0.png",
      "width": 207,
      "height": 207
     }
    ]
   },
   "pitch": -21.68,
   "yaw": 58.5
  }
 ],
 "id": "overlay_4ED5C8D5_5BD1_79FB_41A2_995078315E28",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.4,
   "yaw": 58.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ]
},
{
 "minHeight": 0,
 "paddingLeft": 10,
 "id": "htmlText_46E03A64_5BB1_38DA_41C9_654EDC9A9EAE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "height": "100%",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Rumah Makan Mang Sam merupakan rumah makan yang menyediakan hidangan rabeg dengan cita rasa berbeda dari rumah makan rabeg lainnya, hal ini karena memiliki kuah yang cukup kental. Jenis kuah inilah yang membuat banyak orang merasakan kelezatan rabeg Mang Sam.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Selain rabeg, pengunjung juga bisa merasakan pindang dan menu lainnya di sini.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Alamat: </B><I>Jalan Arga Raya Malabar Blok 9 No. 17, Grogol, Cilegon, Kotasari, Grogol, Kota Cilegon, Banten.</I></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText48765"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "propagateClick": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A, this.camera_72A9412B_5C77_09E6_41C3_C9A8970BBC6E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.88,
   "image": "this.AnimatedImageResource_4CA6459A_5BF3_086E_4199_C1C8AD83D39C",
   "pitch": -24.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 10.23,
   "distance": 100
  }
 ],
 "id": "overlay_4F943B62_5BF3_18DE_41B9_703D70F870A1",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.88,
   "yaw": 10.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -24.55
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_46E2EA5E_5BB1_38E6_4190_EDD2E1011D3F, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.47,
   "image": "this.AnimatedImageResource_47127464_5BB1_08DA_41D1_A01CA1F4E0BA",
   "pitch": 20.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.95,
   "distance": 100
  }
 ],
 "id": "overlay_4029F965_5BB1_18DA_41D0_103C2B3A3635",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.47,
   "yaw": -87.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 20.86
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_2",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_0",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_to_height"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_1",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_to_height"
   }
  }
 ],
 "id": "album_4F24A759_5BD3_08EB_41C3_50E0EC6F19EE_AlbumPlayList"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC, this.camera_73F85460_5C77_0862_41C8_5FB9D6B0B621); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.25,
   "image": "this.AnimatedImageResource_4CADD5A6_5BF3_0BA6_41C9_FD79A886C958",
   "pitch": -29.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.05,
   "distance": 100
  }
 ],
 "id": "overlay_49D1200D_5BDF_086B_41D6_057952215760",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.25,
   "yaw": -2.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -29.45
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005, this.camera_73E88480_5C77_08A2_41CF_6C29D08BF4E0); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.47,
   "image": "this.AnimatedImageResource_4CAD25A7_5BF3_0BA6_41B5_7E8F173BF242",
   "pitch": -27.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.18,
   "distance": 100
  }
 ],
 "id": "overlay_4888FFB1_5BDF_37BA_4190_08C6A002B815",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.47,
   "yaw": 89.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -27.82
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443, this.camera_7336C27C_5C77_0862_41CF_0452B96B83DA); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.25,
   "image": "this.AnimatedImageResource_4CA3F59E_5BF3_0866_41BD_BA9F4E88A9FE",
   "pitch": -29.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90,
   "distance": 100
  }
 ],
 "id": "overlay_488CC79D_5BD3_086B_41C0_F1B0CCAE9286",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.25,
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -29.45
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC, this.camera_7340E2E9_5C77_0862_41C3_9DF96A72BD77); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.07,
   "image": "this.AnimatedImageResource_4CA3259F_5BF3_0866_4198_3DF3D9C21226",
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.68,
   "distance": 50
  }
 ],
 "id": "overlay_4F8F6703_5BD1_085F_41CC_5721D03EFC64",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.07,
   "yaw": 159.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_1_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -26.59
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A, this.camera_732722AB_5C77_08E6_41D4_EA95C956A282); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.12,
   "image": "this.AnimatedImageResource_4CA2959F_5BF3_0866_41C0_DC7180512870",
   "pitch": -22.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 17.18,
   "distance": 100
  }
 ],
 "id": "overlay_48571674_5BD1_08BA_41B5_2D10D1EA377F",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.12,
   "yaw": 17.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_1_HS_2_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_7B9F0D1B_5C71_F9A6_41D6_87123C4254BD, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_776CD7D1_5C71_08A2_41AF_C8FEAB87173A, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0_HS_3_0.png",
      "width": 207,
      "height": 207
     }
    ]
   },
   "pitch": -13.5,
   "yaw": 67.5
  }
 ],
 "id": "overlay_4E2D68BE_5BD1_19A6_41D0_C69DA8780453",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.93,
   "yaw": 67.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C51042_5BD3_08DF_41AC_31963ADA2327, this.camera_73CF3432_5C77_0FE6_41CD_4B5977C38E01); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.68,
   "image": "this.AnimatedImageResource_4CA2D5A0_5BF3_085A_41B5_B79F5A013026",
   "pitch": -26.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81,
   "distance": 100
  }
 ],
 "id": "overlay_48C01CC3_5BD1_79DE_41D1_6666ECA70F4A",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.68,
   "yaw": 81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -26.18
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D, this.camera_73BDA3B5_5C77_08E2_41D0_21909FBFADCC); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.29,
   "image": "this.AnimatedImageResource_4CA235A0_5BF3_085A_41AD_71B6BF48FF20",
   "pitch": -20.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.23,
   "distance": 100
  }
 ],
 "id": "overlay_4F8A2784_5BD1_085A_41B3_A279BF0DCAAB",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.29,
   "yaw": -1.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4, this.camera_73AD93D4_5C77_08A2_41BF_6D7D6A2D8A27); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.47,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0_HS_3_0.png",
      "width": 449,
      "height": 324
     }
    ]
   },
   "pitch": -5.52,
   "yaw": -165.89
  }
 ],
 "id": "overlay_4ECB17F4_5BD1_37BA_41CA_B2F2A520DED7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 26.47,
   "yaw": -165.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_0_HS_3_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -5.52
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005, this.camera_7305324D_5C77_0BA2_41CB_728CA06001E8); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.93,
   "image": "this.AnimatedImageResource_74FE973D_5C71_09E2_41AF_96A7865CF9DA",
   "pitch": -24.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -4.91,
   "distance": 100
  }
 ],
 "id": "overlay_48CC8B06_5BD1_3866_41AC_DE698E58E641",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.93,
   "yaw": -4.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -24.14
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D, this.camera_72E9A1E0_5C77_0862_41D1_CDADF7ECEBE6); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.89,
   "image": "this.AnimatedImageResource_4CA0459E_5BF3_0866_41BE_6E0919C31A7D",
   "pitch": -31.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 87.55,
   "distance": 100
  }
 ],
 "id": "overlay_4903A338_5BD1_08A9_41D1_56269C92C7DC",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.89,
   "yaw": 87.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -31.91
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A, this.camera_731BA1FF_5C77_085E_41D6_EA11F6DA4004); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.44,
   "image": "this.AnimatedImageResource_4CA3859E_5BF3_0866_41AF_598E8A48BC53",
   "pitch": -36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 145.77,
   "distance": 50
  }
 ],
 "id": "overlay_49215821_5BEF_385A_41B0_58DDDE392C1D",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.44,
   "yaw": 145.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_1_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -36
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_7BB7C211_5C71_0BA2_41D1_14DF4366BB35, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_776E87CF_5C71_08BE_41C6_29CF79FF30ED, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0_HS_3_0.png",
      "width": 207,
      "height": 207
     }
    ]
   },
   "pitch": -10.23,
   "yaw": 103.09
  }
 ],
 "id": "overlay_4E94D90E_5BD7_7866_41D0_10D9D978A15B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.08,
   "yaw": 103.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.23
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC, this.camera_72D29175_5C77_0862_41C9_71E9BC48782F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_1_HS_0_0.png",
      "width": 338,
      "height": 297
     }
    ]
   },
   "pitch": -11.66,
   "yaw": -93.48
  }
 ],
 "id": "overlay_7FEA42B1_5C57_08E5_41D1_570AE468C77C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.63,
   "yaw": -93.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7A1118A1_5C51_18E2_41D1_FE6CE98736F4_1_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -11.66
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D, this.camera_7383C386_5C77_08AE_41D3_B2A021BBE20E); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.91,
   "image": "this.AnimatedImageResource_4CA1A59B_5BF3_086E_41BB_D73F5A74F5AA",
   "pitch": -13.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.95,
   "distance": 100
  }
 ],
 "id": "overlay_4F5C6FD3_5BF1_17FE_41B2_45BB6A3197B2",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.91,
   "yaw": 15.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443, this.camera_73721318_5C77_09A2_41CF_825F53DE0ED9); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.94,
   "image": "this.AnimatedImageResource_4CA1159B_5BF3_086E_41D3_55FD45902F03",
   "pitch": -13.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -25.36,
   "distance": 100
  }
 ],
 "id": "overlay_4FDC2187_5BF1_0866_41C1_82839C901171",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.94,
   "yaw": -25.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -13.09
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0, this.camera_73621338_5C77_09E2_41B9_C33772745168); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.19,
   "image": "this.AnimatedImageResource_4CA1559C_5BF3_086A_4188_268E4AFDD62A",
   "pitch": -25.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -147.55,
   "distance": 50
  }
 ],
 "id": "overlay_4F41D7A1_5BF1_085B_41D3_B42E8AF757E8",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.19,
   "yaw": -147.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_1_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0, this.camera_7393D366_5C77_086E_41C2_676E8A4B8179); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.59,
   "image": "this.AnimatedImageResource_4CA0859D_5BF3_086A_41BB_A9549DE3621E",
   "pitch": -22.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 128.59,
   "distance": 50
  }
 ],
 "id": "overlay_4FB0822A_5BF7_08AE_41C4_273FF91CF11E",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.59,
   "yaw": 128.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_1_HS_3_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CACC5A8_5BF3_0BAA_41D6_F54FFEAA94AD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CDF1E55_5BD1_18FA_41C3_6B08C91383E2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C5C633_5BD3_08BE_41D4_15EC9F508005_0_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA6459A_5BF3_086E_4199_C1C8AD83D39C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_47127464_5BB1_08DA_41D1_A01CA1F4E0BA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C50051_5BD3_08FA_41BE_DD497B9037D0_0_HS_1_0.png",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CADD5A6_5BF3_0BA6_41C9_FD79A886C958",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CAD25A7_5BF3_0BA6_41B5_7E8F173BF242",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C51042_5BD3_08DF_41AC_31963ADA2327_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA3F59E_5BF3_0866_41BD_BA9F4E88A9FE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA3259F_5BF3_0866_4198_3DF3D9C21226",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_1_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA2959F_5BF3_0866_41C0_DC7180512870",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C50458_5BD3_08EA_41B2_BB867D1DE30D_1_HS_2_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA2D5A0_5BF3_085A_41B5_B79F5A013026",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA235A0_5BF3_085A_41AD_71B6BF48FF20",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C51A4C_5BD3_38EA_41BE_7814BFBE93DC_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_74FE973D_5C71_09E2_41AF_96A7865CF9DA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA0459E_5BF3_0866_41BE_6E0919C31A7D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA3859E_5BF3_0866_41AF_598E8A48BC53",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C53E5E_5BD3_18E6_41C2_5C1A869BC443_1_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA1A59B_5BF3_086E_41BB_D73F5A74F5AA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA1159B_5BF3_086E_41D3_55FD45902F03",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA1559C_5BF3_086A_4188_268E4AFDD62A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_1_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4CA0859D_5BF3_086A_41BB_A9549DE3621E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_55C2C6FF_5BD3_09A6_4179_7964BA6E4F8A_1_HS_3_0.png",
   "width": 560,
   "height": 540
  }
 ]
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "paddingLeft": 0,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "borderSize": 0,
 "start": "this.init()",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "horizontalAlign": "left",
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "class": "Player",
 "data": {
  "name": "Player3234"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 20
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
