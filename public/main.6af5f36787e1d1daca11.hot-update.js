/*! For license information please see main.6af5f36787e1d1daca11.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatemarco_editorial_website_example("main",{"./app/pages/Home/index.js":(t,e,r)=>{r.r(e),r.d(e,{default:()=>i});var a=r("./app/utils/text.js");class i{constructor(){this.data={articles:[...document.querySelectorAll("[data-article-id]")],currentIdArticle:1},this.splitText(),this.changeArticle({scrollTo:-100,startFrom:2}),window.addEventListener("wheel",this.scrollWheelHandler.bind(this))}splitText(){const t={title:document.querySelectorAll("h2"),description:document.querySelectorAll("p")};for(const e in t){if(!t.hasOwnProperty(e))return;t[e].forEach((t=>{(0,a.split)({append:!0,element:t,expression:"<br>"})}))}}scrollWheelHandler(t){if(t.deltaY>=10){if(this.data.currentIdArticle+1>this.data.articles.length)return;this.data.currentIdArticle++,this.changeArticle({scrollTo:-100})}if(t.deltaY<=-10){if(this.data.currentIdArticle-1<=0)return;this.data.currentIdArticle--,this.changeArticle({scrollTo:100})}}resetTransform(t){return new Promise((e=>{t.style.visibility="hidden",t.style.opacity="0",t.style.transition="transform .1s",t.style.transform="translate3d(0%, 100%, 0)",t.addEventListener("transitionend",(r=>{t.style.visibility="visible",t.style.opacity="1",e()}))}))}changeArticle({scrollTo:t,startFrom:e=1}){const r=document.querySelector(`[data-article-id="${[this.data.currentIdArticle-1<1?1:this.data.currentIdArticle-1]}"]`),a=document.querySelector(`[data-article-id="${[this.data.currentIdArticle+1>this.data.articles.length?this.data.articles.length:this.data.currentIdArticle+1]}"]`),i=document.querySelector(`[data-article-id="${[this.data.currentIdArticle]}"]`);r.style.zIndex=1,a.style.zIndex=1,i.style.zIndex=2;for(let r=e;r<=this.data.articles.length;r++){const e=`[data-article-id="${[r]}"]`,a={p:[...document.querySelectorAll(`${e} p`)],h2:[...document.querySelectorAll(`${e} h2`)],img:[...document.querySelectorAll(`${e} img`)]};console.log(r);for(const i in a)a[i].forEach((async a=>{"IMG"===a.tagName&&(e===`[data-article-id="${this.data.currentIdArticle}"]`&&await this.resetTransform(a),a.style.transition=`transform 1.5s ${this.data.currentIdArticle===r?0:.6}s cubic-bezier(0.55, 0, 0.175, 1)`,a.style.transform=`translate3d(0, ${t*(this.data.currentIdArticle-r)}%, 0)`),[...a.children].forEach((a=>{"BR"!==a.tagName&&[...a.children].forEach((async a=>{e===`[data-article-id="${this.data.currentIdArticle}"]`&&await this.resetTransform(a),a.style.transition=`transform 1.5s ${this.data.currentIdArticle-1===r||this.data.currentIdArticle+1===r?0:.6}s cubic-bezier(0.55, 0, 0.175, 1)`,a.style.transform=`translate3d(0, ${t*(this.data.currentIdArticle-r)}%, 0)`}))}))}))}}show(){document.querySelector(".home__articles").classList.add("home__articles--active")}hide(){document.querySelector(".home__articles").classList.remove("home__articles--active")}}}},(function(t){t.h=()=>"27ffe984444169650db0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJvQyxFQUFJLEVBQUksc0NBRXhDUyxFQUFHcEIsTUFBTUksVUFBYSxrQkFDckIxQixHQUFZUixLQUFLQyxLQUFLSSxpQkFBbUJvQyxXQUczQyxJQUFJUyxFQUFHRSxVQUFVakMsU0FBU2tDLElBQ0osT0FBakJBLEVBQUtGLFNBRVQsSUFBSUUsRUFBS0QsVUFBVWpDLFNBQVE4QixNQUFBQSxJQUV6QjVDLElBQXNCLHFCQUFvQkwsS0FBS0MsS0FBS0ksNEJBRTlDTCxLQUFLMkIsZUFBZTJCLEdBRTNCQSxFQUFZeEIsTUFBTUcsV0FBYyxrQkFDL0JqQyxLQUFLQyxLQUFLSSxpQkFBbUIsSUFBTW9DLEdBQ25DekMsS0FBS0MsS0FBS0ksaUJBQW1CLElBQU1vQyxFQUNoQyxFQUNBLHNDQUVKYSxFQUFZeEIsTUFBTUksVUFBYSxrQkFDOUIxQixHQUFZUixLQUFLQyxLQUFLSSxpQkFBbUJvQyxvQkFTaERjLE9BQ2dCcEQsU0FBU2tDLGNBQWMsbUJBQy9CbUIsVUFBVUMsSUFBSywwQkFHdkJDLE9BQ2dCdkQsU0FBU2tDLGNBQWMsbUJBQy9CbUIsVUFBVUcsT0FBUSwyQ0MzSTNCQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyY29fZWRpdG9yaWFsX3dlYnNpdGVfZXhhbXBsZS8uL2FwcC9wYWdlcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL21hcmNvX2VkaXRvcmlhbF93ZWJzaXRlX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5pbXBvcnQge3NwbGl0fSBmcm9tICd1dGlscy90ZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZGF0YSA9IHtcblx0XHRcdGFydGljbGVzOiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXJ0aWNsZS1pZF0nKV0sXG5cdFx0XHRjdXJyZW50SWRBcnRpY2xlOiAxLFxuXHRcdH07XG5cblx0XHR0aGlzLnNwbGl0VGV4dCgpO1xuXHRcdHRoaXMuY2hhbmdlQXJ0aWNsZSh7c2Nyb2xsVG86IC0xMDAsIHN0YXJ0RnJvbTogMn0pO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5zY3JvbGxXaGVlbEhhbmRsZXIuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRzcGxpdFRleHQoKSB7XG5cdFx0Y29uc3QgZWxlbWVudFRvU3BsaXQgPSB7XG5cdFx0XHR0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDInKSxcblx0XHRcdGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwJyksXG5cdFx0fTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBpbiBlbGVtZW50VG9TcGxpdCkge1xuXHRcdFx0aWYgKCFlbGVtZW50VG9TcGxpdC5oYXNPd25Qcm9wZXJ0eShlbGVtZW50KSkgcmV0dXJuO1xuXG5cdFx0XHRlbGVtZW50VG9TcGxpdFtlbGVtZW50XS5mb3JFYWNoKCh0ZXh0KSA9PiB7XG5cdFx0XHRcdHNwbGl0KHtcblx0XHRcdFx0XHRhcHBlbmQ6IHRydWUsXG5cdFx0XHRcdFx0ZWxlbWVudDogdGV4dCxcblx0XHRcdFx0XHRleHByZXNzaW9uOiAnPGJyPicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c2Nyb2xsV2hlZWxIYW5kbGVyKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LmRlbHRhWSA+PSAxMCkge1xuXHRcdFx0aWYgKHRoaXMuZGF0YS5jdXJyZW50SWRBcnRpY2xlICsgMSA+IHRoaXMuZGF0YS5hcnRpY2xlcy5sZW5ndGgpIHJldHVybjtcblx0XHRcdHRoaXMuZGF0YS5jdXJyZW50SWRBcnRpY2xlKys7XG5cdFx0XHR0aGlzLmNoYW5nZUFydGljbGUoe3Njcm9sbFRvOiAtMTAwfSk7XG5cdFx0fVxuXHRcdGlmIChldmVudC5kZWx0YVkgPD0gLTEwKSB7XG5cdFx0XHRpZiAodGhpcy5kYXRhLmN1cnJlbnRJZEFydGljbGUgLSAxIDw9IDApIHJldHVybjtcblx0XHRcdHRoaXMuZGF0YS5jdXJyZW50SWRBcnRpY2xlLS07XG5cdFx0XHR0aGlzLmNoYW5nZUFydGljbGUoe3Njcm9sbFRvOiAxMDB9KTtcblx0XHR9XG5cdH1cblxuXHRyZXNldFRyYW5zZm9ybShlbGVtZW50KSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHRcdGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcblx0XHRcdGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gLjFzYDtcblx0XHRcdGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAlLCAxMDAlLCAwKWA7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoXykgPT4ge1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRjaGFuZ2VBcnRpY2xlKHtzY3JvbGxUbywgc3RhcnRGcm9tID0gMX0pIHtcblx0XHRjb25zdCBwcmV2aXVzQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRgW2RhdGEtYXJ0aWNsZS1pZD1cIiR7W1xuXHRcdFx0XHR0aGlzLmRhdGEuY3VycmVudElkQXJ0aWNsZSAtIDEgPCAxID8gMSA6IHRoaXMuZGF0YS5jdXJyZW50SWRBcnRpY2xlIC0gMSxcblx0XHRcdF19XCJdYFxuXHRcdCk7XG5cdFx0Y29uc3QgbmV4dEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0YFtkYXRhLWFydGljbGUtaWQ9XCIke1tcblx0XHRcdFx0dGhpcy5kYXRhLmN1cnJlbnRJZEFydGljbGUgKyAxID4gdGhpcy5kYXRhLmFydGljbGVzLmxlbmd0aFxuXHRcdFx0XHRcdD8gdGhpcy5kYXRhLmFydGljbGVzLmxlbmd0aFxuXHRcdFx0XHRcdDogdGhpcy5kYXRhLmN1cnJlbnRJZEFydGljbGUgKyAxLFxuXHRcdFx0XX1cIl1gXG5cdFx0KTtcblx0XHRjb25zdCBjdXJyZW50QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRgW2RhdGEtYXJ0aWNsZS1pZD1cIiR7W3RoaXMuZGF0YS5jdXJyZW50SWRBcnRpY2xlXX1cIl1gXG5cdFx0KTtcblx0XHRwcmV2aXVzQXJ0aWNsZS5zdHlsZS56SW5kZXggPSAxO1xuXHRcdG5leHRBcnRpY2xlLnN0eWxlLnpJbmRleCA9IDE7XG5cdFx0Y3VycmVudEFydGljbGUuc3R5bGUuekluZGV4ID0gMjtcblxuXHRcdGZvciAobGV0IGkgPSBzdGFydEZyb207IGkgPD0gdGhpcy5kYXRhLmFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50SWRBcnRpY2xlID0gYFtkYXRhLWFydGljbGUtaWQ9XCIke1tpXX1cIl1gO1xuXHRcdFx0Y29uc3QgYXJ0aWNsZUVsZW1lbnRzID0ge1xuXHRcdFx0XHRwOiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtjdXJyZW50SWRBcnRpY2xlfSBwYCldLFxuXHRcdFx0XHRoMjogWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7Y3VycmVudElkQXJ0aWNsZX0gaDJgKV0sXG5cdFx0XHRcdGltZzogWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7Y3VycmVudElkQXJ0aWNsZX0gaW1nYCldLFxuXHRcdFx0fTtcblx0XHRcdGNvbnNvbGUubG9nKGkpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnRzIGluIGFydGljbGVFbGVtZW50cykge1xuXHRcdFx0XHRhcnRpY2xlRWxlbWVudHNbZWxlbWVudHNdLmZvckVhY2goYXN5bmMgKGVsKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVsLnRhZ05hbWUgPT09ICdJTUcnKSB7XG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRJZEFydGljbGUgPT09IGBbZGF0YS1hcnRpY2xlLWlkPVwiJHt0aGlzLmRhdGEuY3VycmVudElkQXJ0aWNsZX1cIl1gXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMucmVzZXRUcmFuc2Zvcm0oZWwpO1xuXG5cdFx0XHRcdFx0XHRlbC5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAxLjVzICR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YS5jdXJyZW50SWRBcnRpY2xlID09PSBpID8gMCA6IDAuNlxuXHRcdFx0XHRcdFx0fXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMTc1LCAxKWA7XG5cdFx0XHRcdFx0XHRlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgJHtcblx0XHRcdFx0XHRcdFx0c2Nyb2xsVG8gKiAodGhpcy5kYXRhLmN1cnJlbnRJZEFydGljbGUgLSBpKVxuXHRcdFx0XHRcdFx0fSUsIDApYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Wy4uLmVsLmNoaWxkcmVuXS5mb3JFYWNoKChzcGFuKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoc3Bhbi50YWdOYW1lID09PSAnQlInKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFsuLi5zcGFuLmNoaWxkcmVuXS5mb3JFYWNoKGFzeW5jIChzcGFuRWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudElkQXJ0aWNsZSA9PT0gYFtkYXRhLWFydGljbGUtaWQ9XCIke3RoaXMuZGF0YS5jdXJyZW50SWRBcnRpY2xlfVwiXWBcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMucmVzZXRUcmFuc2Zvcm0oc3BhbkVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdHNwYW5FbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtIDEuNXMgJHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuY3VycmVudElkQXJ0aWNsZSAtIDEgPT09IGkgfHxcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuY3VycmVudElkQXJ0aWNsZSArIDEgPT09IGlcblx0XHRcdFx0XHRcdFx0XHRcdD8gMFxuXHRcdFx0XHRcdFx0XHRcdFx0OiAwLjZcblx0XHRcdFx0XHRcdFx0fXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMTc1LCAxKWA7XG5cdFx0XHRcdFx0XHRcdHNwYW5FbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke1xuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFRvICogKHRoaXMuZGF0YS5jdXJyZW50SWRBcnRpY2xlIC0gaSlcblx0XHRcdFx0XHRcdFx0fSUsIDApYDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzaG93KCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19hcnRpY2xlcycpO1xuXHRcdHBhcmVudC5jbGFzc0xpc3QuYWRkKGBob21lX19hcnRpY2xlcy0tYWN0aXZlYCk7XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19hcnRpY2xlcycpO1xuXHRcdHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKGBob21lX19hcnRpY2xlcy0tYWN0aXZlYCk7XG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI3ZmZlOTg0NDQ0MTY5NjUwZGIwXCIpIl0sIm5hbWVzIjpbIkhvbWUiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJkYXRhIiwiYXJ0aWNsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50SWRBcnRpY2xlIiwic3BsaXRUZXh0IiwiY2hhbmdlQXJ0aWNsZSIsInNjcm9sbFRvIiwic3RhcnRGcm9tIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFdoZWVsSGFuZGxlciIsImJpbmQiLCJlbGVtZW50VG9TcGxpdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJmb3JFYWNoIiwidGV4dCIsInNwbGl0IiwiYXBwZW5kIiwiZXhwcmVzc2lvbiIsImV2ZW50IiwiZGVsdGFZIiwibGVuZ3RoIiwicmVzZXRUcmFuc2Zvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiXyIsInByZXZpdXNBcnRpY2xlIiwicXVlcnlTZWxlY3RvciIsIm5leHRBcnRpY2xlIiwiY3VycmVudEFydGljbGUiLCJ6SW5kZXgiLCJpIiwiYXJ0aWNsZUVsZW1lbnRzIiwicCIsImgyIiwiaW1nIiwiY29uc29sZSIsImxvZyIsImVsZW1lbnRzIiwiYXN5bmMiLCJlbCIsInRhZ05hbWUiLCJjaGlsZHJlbiIsInNwYW4iLCJzcGFuRWxlbWVudCIsInNob3ciLCJjbGFzc0xpc3QiLCJhZGQiLCJoaWRlIiwicmVtb3ZlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9