(()=>{"use strict";const n=()=>'\n    <div class="Error404">\n      <h2> Error 404 </h2>\n    </div>\n\n  ',a={"/":async()=>'\n    <div class="Characters">\n\n        <article class="Character-item">\n          <a href="#/1/">\n            <img src="image.jpg" alt="iamge">\n            <h2> Home </h2>\n          </a>\n        </article>\n    </div>\n  '},e=async()=>{let e=a[route]?a[route]:n;content.innerHTML=await e()};window.addEventListener("load",e),window.addEventListener("hashchange",e)})();