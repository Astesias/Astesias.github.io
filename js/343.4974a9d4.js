(self["webpackChunkblob"]=self["webpackChunkblob"]||[]).push([[343],{4343:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var l=n(6768),i=n(4232);const c={class:"article-bg base_left lnormal hnormal container rnormal y-scroll",id:"article"},o=(0,l.Lk)("div",null,null,-1),a={class:"article-container"},r={class:"article-container2 articlecontent"},s={class:"articlectitle"},d={class:"articlectag"},u=(0,l.Lk)("i",{class:"iconfont icon-shijian"},null,-1),m=(0,l.Lk)("i",{class:"iconfont icon-liulan"},null,-1),h=(0,l.Lk)("i",{class:"iconfont icon-pinglun"},null,-1),v=(0,l.Lk)("i",{class:"iconfont icon-tanbi"},null,-1),w=(0,l.Lk)("i",{class:"iconfont icon-biaoqian"},null,-1),f=["src"],g={class:"articlecsubtitle"},p={class:"articlectext"},k=(0,l.Lk)("div",null,null,-1);function b(t,e,b,L,x,y){const E=(0,l.g2)("AppBase"),_=(0,l.g2)("MdComponent"),j=(0,l.g2)("AppRight");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(E),(0,l.Lk)("div",c,[o,(0,l.Lk)("div",a,[(0,l.Lk)("div",r,[(0,l.Lk)("div",s,(0,i.v_)(x.acticle.title),1),(0,l.Lk)("div",d,[u,(0,l.eW)(" "+(0,i.v_)(y.timeTransfer(x.acticle.time))+" ",1),m,(0,l.eW)(" "+(0,i.v_)(x.acticle.view)+" ",1),h,(0,l.eW)(" "+(0,i.v_)(x.acticle.comment)+" ",1),v,(0,l.eW)(" "+(0,i.v_)(x.acticle.comment)+" ",1),w,(0,l.eW)(" "+(0,i.v_)(x.acticle.tag?x.acticle.tag.join("、"):"无"),1)]),(0,l.Lk)("img",{class:"articlectitleimg",src:n(3760)(`./${x.acticle.img}`)},null,8,f),(0,l.Lk)("div",g,(0,i.v_)(x.acticle.describe),1),(0,l.Lk)("div",p,[(0,l.bF)(_,{scrollElement:"scrollElement",text:x.mdtext},null,8,["text"])])])]),k,(0,l.bF)(j,{wt:t.wt},null,8,["wt"])])],64)}var L=n(4248),x=n(4150),y=n(3942),E={name:"App",components:{AppRight:x.A,AppBase:L.A,MdComponent:y["default"]},data(){return this.articleId=this.$route.params.id,{acticle:n(8892)(`./${this.articleId}`),scrollElement:document.getElementsByClassName("articlectext")[0],mdtext:""}},methods:{handleScroll(){var t=document.getElementById("article"),e=document.getElementById("foot"),n=t.scrollTop,l=t.scrollHeight,i=t.clientHeight,c=l-(n+i);e.style.bottom=c<30?-1-c+"px":"-31px"},timeTransfer(t){var[e,n,l,i,c]=t;return i=c,c=i,`${e}年${n}月${l}日`}},async mounted(){try{const t=await fetch("/data/daylog/day12.md");if(!t.ok)throw new Error("Network response was not ok");this.mdtext=await t.text(),this.mdtext=this.mdtext.replace("img/","../../data/daylog/img/"),console.log(this.mdtext)}catch(t){console.error("Fetch error:",t),this.mdtext="Failed to fetch article content."}this.handleScroll(),document.getElementById("article").addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},created(){this.last_wt=this.wt=window.innerWidth>1e3?0:window.innerWidth>750?1:window.innerWidth>500?2:3},watch:{"$route.params.id"(t,e){console.log(e),this.acticle=n(8892)(`./${t}`)}}},_=n(1241);const j=(0,_.A)(E,[["render",b]]);var A=j},8892:function(t,e,n){var l={"./1":4758,"./1.json":4758,"./2":6951,"./2.json":6951,"./3":8644,"./3.json":8644,"./about":3988,"./about.json":3988,"./view":8678,"./view.json":8678};function i(t){var e=c(t);return n(e)}function c(t){if(!n.o(l,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return l[t]}i.keys=function(){return Object.keys(l)},i.resolve=c,t.exports=i,i.id=8892}}]);
//# sourceMappingURL=343.4974a9d4.js.map