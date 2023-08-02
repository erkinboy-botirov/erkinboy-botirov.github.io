(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{596:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),a=n(5),o=n(6),r=n(108);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}var u={data:function(){return{dragYstart:0,lastY:0,dragThreshold:10,compactMenu:!1,mainMenuHeight:null,mainMenuStyle:{height:"auto"}}},mixins:[o.a],components:{DynamicLink:r.default},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.b)({menuItems:"menu/menuItems",user:"auth/getUser",quizProfile:"quizzes/profile",loadingProfile:"quizzes/loadingProfile"})),created:function(){this.$store.dispatch("quizzes/fetchQuizProfile")},methods:{closeMenu:function(){this.$store.commit({type:"menu/setMenuOpen",menuOpen:!1})},goToAccountSettings:function(){this.handleItemClick({menuContent:"account-settings",component:"account-settings/account-settings.vue",isMenuExpanded:!0})},goToStyleSettings:function(){this.handleItemClick({menuContent:"style-settings",component:"style-settings/style-settings.vue",isMenuExpanded:!0})},handleCameraIconClick:function(){var t=this;window.plugins.actionsheet.show({title:"Change Profile Photo",buttonLabels:["Choose from Library","Take Photo"],addCancelButtonWithLabel:"Cancel",destructiveButtonLast:!1},(function(e){var n={destinationType:Camera.DestinationType.FILE_URI,allowEdit:!0,targetWidth:800,targetHeight:1e3};1==e?n.sourceType=Camera.PictureSourceType.PHOTOLIBRARY:2==e&&(n.sourceType=Camera.PictureSourceType.CAMERA),navigator.camera.getPicture((function(e){t.$store.dispatch("auth/updateUserPhoto",{imageUri:e}).then((function(t){})).catch((function(t){}))}),(function(t){}),n)}))},handleItemClick:function(t){if(void 0!==t.href&&t.href)this.$helpers.visitUrl(this.$router,t.href),this.closeMenu();else if(void 0!==t.menuContent&&t.menuContent)this.$store.commit({type:"menu/setCurrentMenuItem",item:t});else if(void 0!==t.handler&&t.handler)switch(t.handler){case"INVITE_FRIENDS":return this.handleInviteFriendsClick()}},handleInviteFriendsClick:function(){var t=this;this.$store.dispatch("share/setUrl",{type:"invite"}).then((function(){t.$store.dispatch("share/sms")}))},dragstart:function(t){this.dragYstart=t.touches[0].pageY,this.mainMenuHeight=this.$refs.mainMenu.clientHeight},dragend:function(t){this.dragDown&&t.changedTouches[0].pageY-this.dragYstart>this.dragThreshold?(this.mainMenuStyle.height="50vh",this.mainMenuStyle.minHeight="50vh"):(!this.dragDown||t.changedTouches[0].pageY-this.dragYstart<=this.dragThreshold)&&(this.mainMenuStyle.height="auto"),this.dragYstart=0},dragmove:function(t){this.mainMenuStyle.height=this.mainMenuHeight-(t.changedTouches[0].pageY-this.dragYstart)+"px",this.dragDown=this.lastY<t.changedTouches[0].pageY,this.lastY=t.changedTouches[0].pageY}}},l=n(0),h=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"mainMenu",staticClass:"main-menu full-height",style:t.mainMenuStyle},[n("div",{staticClass:"handle",on:{touchstart:t.dragstart,touchend:t.dragend,touchmove:t.dragmove}}),t._v(" "),n("div",{staticClass:"wtw-container step-container"},[n("div",{staticClass:"user-details"},[n("div",{staticClass:"name-photo"},[n("span",{staticClass:"text"},[t._v("\n                    "+t._s(t.user.user_display_name)+"\n                    "),n("span",{staticClass:"edit"},[n("img",{attrs:{src:t.imageUrl("edit.svg")},on:{click:function(e){return e.stopPropagation(),t.goToAccountSettings()}}})])]),t._v(" "),n("span",{staticClass:"change-photo"},[n("img",{attrs:{src:t.imageUrl("camera.svg")},on:{click:function(e){return e.stopPropagation(),t.handleCameraIconClick()}}})])]),t._v(" "),n("div",{staticClass:"personality"},[n("transition",{attrs:{name:"fade"}},[t.loadingProfile?n("span",{staticClass:"text"},[t._v("Loading your personal style...")]):n("span",{staticClass:"text"},[t._v(t._s(t.quizProfile.user_style))])])],1)]),t._v(" "),n("ul",t._l(t.menuItems,(function(e,i){return n("li",{on:{click:function(n){return n.stopPropagation(),t.handleItemClick(e)}}},[e.menuItemComponent?n("dynamic-link",{attrs:{type:e.menuItemComponent}}):n("span",{staticClass:"text"},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),t._v(" "),n("div",{staticClass:"wtw-container shop-actions step-actions"},[n("div",{staticClass:"buttons"},[n("span",{on:{click:function(e){return e.stopPropagation(),t.closeMenu(e)}}},[n("router-link",{staticClass:"button outline-pink main-menu-button",attrs:{to:"/get-styled"}},[t._v("Personal Styling")])],1),t._v(" "),n("span",{on:{click:function(e){return e.stopPropagation(),t.closeMenu(e)}}},[n("router-link",{staticClass:"button outline-black main-menu-button",attrs:{to:"/featured-outfits"}},[t._v("Shop Featured")])],1)]),t._v(" "),n("router-link",{staticClass:"button sign-out-button",attrs:{to:"/intro"}},[t._v("\n            sign out\n        ")])],1)])}),[],!1,null,null,null);e.default=h.exports}}]);
//# sourceMappingURL=0.bundle.js.map