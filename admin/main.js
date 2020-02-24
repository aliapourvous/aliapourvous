// import CMS from "netlify-cms-app";
// import { fr } from "netlify-cms-locales";

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// CMS.registerLocale("fr", fr);