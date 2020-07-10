// import CMS from "netlify-cms-app";
// import { fr } from "netlify-cms-locales";

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", function (user) {
    if (!user) {
      window.netlifyIdentity.on("login", function() {
        document.location.href = "/admin/";
      });
    }
  });
}

// CMS.registerLocale("fr", fr);

CMS.registerPreviewStyle("/admin/custom-preview.css");
CMS.registerEditorComponent({
  id: "youtube",
  label: "Youtube",
  fields: [{name: "id", label: "ID de la vidéo YouTube"}],
  pattern: /^{{<\s?youtube (\S+)\s?>}}/,
  fromBlock: function (match) {
    return {
      id: match[1]
    };
  },
  toBlock: function (obj) {
    return "{{< youtube " + obj.id + " >}}";
  },
  toPreview: function (obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video" style="max-width:100%"/>'
    );
  }
});