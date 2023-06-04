var playOnYouTube=(()=>{var e,t,i=Object.create,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,d=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,a=(e,t,a)=>{a=null!=e?i(d(e)):{};var r=!t&&e&&e.__esModule?a:u(a,"default",{value:e,enumerable:!0}),n=e,l=void 0,o=void 0;if(n&&"object"==typeof n||"function"==typeof n)for(let e of s(n))p.call(r,e)||e===l||u(r,e,{get:()=>n[e],enumerable:!(o=c(n,e))||o.enumerable});return r},r=(e={"external-global-plugin:react"(e,t){t.exports=Spicetify.React}},function(){return t||(0,e[s(e)[0]])((t={exports:{}}).exports,t),t.exports}),n=a(r()),o=a(r()),l="playOnYouTube",m={cached:{"spotify:track:4oBhE31sIakxf8bSPHuRT1":"ixkoVwKQaJg"},YouTubeApiKey:"",backupApiKeys:[]};function f(e,t){localStorage.setItem(e,t)}function b(t){return Object.keys(m).forEach(e=>{void 0===t[e]&&(t[e]=m[e])}),Object.keys(t).forEach(e=>{void 0===m[e]&&delete t[e]}),h(t),t}function y(){try{var e=JSON.parse((t=l+":settings",localStorage.getItem(t)));if(e&&"object"==typeof e)return b(e);throw""}catch(e){return b({})}var t}var g=y();function h(e,t){var a;e&&"string"==typeof e&&void 0!==t?((a=y())[e]=t,f(l+":settings",JSON.stringify(a))):f(l+":settings",e&&"object"==typeof e?JSON.stringify(e):JSON.stringify(g))}var v=g;function x({start:e=!1,children:t="Title"}={}){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"popup-row"},e?o.default.createElement(I,null):null,o.default.createElement("h3",{className:"div-title"},t),o.default.createElement("hr",{className:"divider"})))}function w({children:e="Description"}={}){var t=o.default.Children.toArray(e).some(e=>e.type&&"Highlight"===e.type.name);return o.default.createElement(o.default.Fragment,null,t?o.default.createElement("div",{className:"popup-row"},o.default.createElement("p",{className:"col description"},o.default.createElement("span",null,e))):o.default.createElement("div",{className:"popup-row"},o.default.createElement("p",{className:"col description"},e)))}function k({children:e="Highlight",color:t=""}={}){return o.default.createElement("span",{className:t?" "+t:""},e)}function E({href:e="https://www.youtube.com/",children:t="YouTube"}={}){return o.default.createElement("div",{className:"popup-row"},o.default.createElement("a",{className:"demo",href:e},t))}function I(){return o.default.createElement("div",{className:"popup-row"},o.default.createElement("div",{className:"little-space"}))}function A(){return o.default.createElement("div",{className:"popup-row"},o.default.createElement("hr",{className:"space"}))}function T({field:t=void 0,onChangeHandler:a=()=>{}}={}){if(void 0===t)return null;const[e,r]=(0,o.useState)(v[t]);return o.default.createElement("div",{className:"popup-row"},o.default.createElement("input",{placeholder:"Your API Key",value:e,className:"inputbox",onChange:function(e){r(e.target.value),v[t]=e.target.value,h(t,v[t]),a(e)}}))}function P({value:e=void 0,isLastItem:t=!1,onChangeHandler:a=()=>{},onClickHandler:r=()=>{}}){if(void 0===e)return null;const[n,l]=(0,o.useState)(e);return(0,o.useEffect)(()=>{l(e)},[e]),o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"popup-row"},o.default.createElement("div",{className:"input-wrapper"},o.default.createElement("input",{className:t?"inputbox last-item":"inputbox",value:n,placeholder:"Your API key",onChange:function(e){l(e.target.value),a(e.target.value)}}),o.default.createElement("button",{className:"checkbox",type:"button",onClick:r},o.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",dangerouslySetInnerHTML:{__html:Spicetify.SVGIcons.x}})))),o.default.createElement(I,null))}function Y({color:e="",children:t="Button"}={}){const[n,l]=(0,o.useState)(v.backupApiKeys);const a=(0,o.useRef)(!0);return(0,o.useEffect)(()=>{if(a.current)return a.current=!1;v.backupApiKeys=n.filter(Boolean),h("backupApiKeys",v.backupApiKeys)},[n]),o.default.createElement(o.default.Fragment,null,n.map((e,r)=>o.default.createElement(o.default.Fragment,null,o.default.createElement(P,{value:e,isLastItem:r===n.length-1,onChangeHandler:e=>{var t,a;e=e,t=r,(a=[...n])[t]=e,l(a)},onClickHandler:()=>{{var t=r;let e=[...n];e.splice(t,1),setTimeout(()=>{l(e)},10)}}}))),o.default.createElement("div",{className:"popup-row"},o.default.createElement("button",{className:"login-button center-button"+(e?" "+e:""),type:"button",onClick:function(){!n[n.length-1]&&0!==n.length||l([...n,""]),setTimeout(()=>{var e;null!=(e=document.querySelector(".inputbox.last-item"))&&e.focus()},10)}},t)))}var S=g;function C(e){window.open("https://www.youtube.com/results?search_query="+encodeURIComponent(e))}function N(e){window.open("https://www.youtube.com/watch?v="+e)}var O=g;async function K(e,t){try{var a=await Spicetify.CosmosAsync.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(e)}&type=video&key=`+t);if(null!=a&&"object"==typeof a)return{firstVideoID:a.items[0].id.videoId,allVideos:a.items}}catch(e){return{firstVideoID:null,allVideos:null}}}var V='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>';function M(){let u=g,c=!1;new Spicetify.Menu.Item("Play on YouTube",!1,()=>{Spicetify.PopupModal.display({title:"YouTube API key",content:n.default.createElement("div",{className:"tetrax-settings-menu","aria-label":"YouTube API key"},n.default.createElement(x,{start:"true"},"Info"),n.default.createElement(w,null,"By Using your ",n.default.createElement(k,{color:"red-text"},"Own API Key")," the exact video will ",n.default.createElement(k,{color:"red-text"},"open directly on YouTube"),". If not only the relavent search page will be opened."),n.default.createElement(E,{href:"https://www.youtube.com/watch?v=44OBOSBd73M"},"How to get my API key? ( 1 min YouTube video )"),n.default.createElement(A,null),n.default.createElement(x,null,"Enter your API key :"),n.default.createElement(I,null),n.default.createElement(T,{field:"YouTubeApiKey"}),n.default.createElement(A,null),n.default.createElement(x,null,"Backup API Keys (optional)"),n.default.createElement(w,null,"If your API quota got ",n.default.createElement(k,{color:"red-text"},"exceeded")," you will be taken to the ",n.default.createElement(k,{color:"red-text"},"relavent search page"),". You can open"," ",n.default.createElement(k,{color:"red-text"},"100 video songs")," directly a day for a single API Key. If you don't want to be redirected to the search page you can add more API keys to"," ",n.default.createElement(k,{color:"red-text"},"increase quota"),"."),n.default.createElement(Y,null,"Add another API key")),isLarge:!0});var e=document.querySelector(".main-trackCreditsModal-header"),t=document.createElement("a"),a=(t.textContent="Join our discord server for help and discussions",t.href="https://discord.gg/DaUbPmbDwr",t.className="tetrax-settings-discord-link",document.createElement("div"));a.appendChild(document.querySelector("h1.main-type-alto")),a.appendChild(t),e.prepend(a)},V).register();let s=new Spicetify.ContextMenu.Item("Play on YouTube",async function(e){e=e[0];if(l=e,(l=null!=(l=S.cached[l])?l:null)&&!c)return void N(l);let{searchString:t=null,trimmedSongName:a=null}=await async function(e){if(null!=(e=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/tracks/"+e.split(":")[2])))return{searchString:e.album.artists.map(e=>e.name).join(", ")+" - "+e.name+" video song",trimmedSongName:e.name.replace(/\(.+?\)/g,"").replace(/\[.+?\]/g,"").replace(/\s-\s.+?$/,"").replace(/,.+?$/,"").trim()}}(e);if(null===t)return;if(!u.YouTubeApiKey||c)return void C(t);let{firstVideoID:r=null,allVideos:n=null}=await K(t,u.YouTubeApiKey);if(!r){if(!u.backupApiKeys.length)return void C(t);var{firstVideoID:l=null,allVideos:o=null}=await async function(e){for(var t of O.backupApiKeys){var{firstVideoID:t=null,allVideos:a=null}=await K(e,t);if(t)return{firstVideoID:t,allVideos:a}}return{firstVideoID:null,allVideos:null}}(t);if(!l)return void C(t);r=l,n=o}let i=r;n.some(e=>!!e.snippet.title.toLowerCase().includes(a.toLowerCase())&&(i=e.id.videoId,!0)),u.cached[e]=i,h("cached",u.cached),N(i),c=!1,s.name="Play on YouTube"},function(e){return Spicetify.URI.fromString(e[0]).type===Spicetify.URI.Type.TRACK},V);s.register(),window.addEventListener("keydown",e=>{e.repeat||"Control"==e.key&&(c=!0,s.name="Search on YouTube")}),window.addEventListener("keyup",e=>{e.repeat||"Control"==e.key&&(c=!1,s.name="Play on YouTube")}),addEventListener("blur",()=>{c=!1,s.name="Play on YouTube"})}(async()=>{(async function(){for(;null==Spicetify||!Spicetify.Menu||null==Spicetify||!Spicetify.ContextMenu;)await new Promise(e=>setTimeout(e,10));M()})()})()})();(async()=>{var e;document.getElementById("playOnYouTube")||((e=document.createElement("style")).id="playOnYouTube",e.textContent=String.raw`
  .tetrax-settings-menu[aria-label="YouTube API key"] .popup-row::after{content:"";display:table;clear:both}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .col{display:flex;padding:10px 0;align-items:center}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .col.description{float:left;padding-right:15px}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .col.action{float:right;text-align:right}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .div-title{color:var(--spice-text)}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .divider{height:2px;border-width:0;background-color:var(--spice-button-disabled)}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .space{margin-bottom:20px;visibility:hidden}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .demo{font-size:13px;color:#59ce8f}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .little-space{margin-bottom:10px}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .inputbox{width:-webkit-fill-available;display:flex;flex-direction:column;padding:10px;border-radius:15px;border:0;box-shadow:4px 4px 10px rgba(0,0,0,.06)}.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .input-wrapper{display:flex}.tetrax-settings-menu[aria-label="YouTube API key"] button.checkbox{align-items:center;border:0;border-radius:50%;background-color:rgba(var(--spice-rgb-shadow),.7);color:var(--spice-text);cursor:pointer;display:flex;-webkit-margin-start:12px;margin-inline-start:12px;padding:8px}.tetrax-settings-menu[aria-label="YouTube API key"] button.checkbox.disabled{color:rgba(var(--spice-rgb-text),.3)}.tetrax-settings-menu[aria-label="YouTube API key"] select{color:var(--spice-text);background:rgba(var(--spice-rgb-shadow),.7);border:0;height:32px}.tetrax-settings-menu[aria-label="YouTube API key"] ::-webkit-scrollbar{width:8px}.tetrax-settings-menu[aria-label="YouTube API key"] .login-button{background-color:var(--spice-button);border-radius:8px;border-style:none;color:var(--spice-text);cursor:pointer;font-size:14px;height:40px;margin-right:20px;padding:5px 10px;text-align:center}.tetrax-settings-menu[aria-label="YouTube API key"] .center-button{display:block;margin:10px auto}.tetrax-settings-menu[aria-label="YouTube API key"] .green-btn{background-color:#6bcb77;color:#25316d}.tetrax-settings-menu[aria-label="YouTube API key"] .red-btn{background-color:#bf616a}.tetrax-settings-menu[aria-label="YouTube API key"] .green-text{color:#6bcb77}.tetrax-settings-menu[aria-label="YouTube API key"] .red-text{color:#bf616a}.GenericModal[aria-label="YouTube API key"] .main-trackCreditsModal-header .tetrax-settings-discord-link{color:var(--spice-custom-success)}.GenericModal[aria-label="YouTube API key"] .main-trackCreditsModal-header .tetrax-settings-discord-link:hover{color:var(--spice-custom-link-hover)}
      `.trim(),document.head.appendChild(e))})();