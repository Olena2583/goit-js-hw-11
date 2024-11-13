/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function l(n){const s=`https://pixabay.com/api/?key=46878929-31b62e2632123f6a0a302d7dc&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await(await fetch(s)).json();return e.hits.length===0?(iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!"}),[]):e.hits}catch(r){return iziToast.error({message:"An error occurred while fetching images. Please try again."}),console.error("Error fetching images:",r),[]}}function u(n){const o=document.querySelector(".gallery");o.innerHTML="";const s=n.map(r=>`
        <a href="${r.largeImageURL}" class="gallery__item">
          <img src="${r.webformatURL}" alt="${r.tags}" />
          <div class="gallery__info">
            <p>Likes: ${r.likes}</p>
            <p>Views: ${r.views}</p>
            <p>Comments: ${r.comments}</p>
            <p>Downloads: ${r.downloads}</p>
          </div>
        </a>
      `).join("");o.insertAdjacentHTML("beforeend",s)}const d=document.querySelector(".search-form");document.querySelector(".gallery");const c=document.querySelector(".loader");let i;const f=()=>c.classList.add("visible"),m=()=>c.classList.remove("visible");d.addEventListener("submit",async n=>{n.preventDefault();const o=n.currentTarget.elements.query.value.trim();if(!o){iziToast.warning({message:"Please enter a search term!"});return}f();try{const s=await l(o);u(s),i?i.refresh():i=new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250})}catch(s){console.error("Error:",s)}finally{m()}});
//# sourceMappingURL=index.js.map
