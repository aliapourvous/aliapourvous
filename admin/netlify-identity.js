if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

var CategoriesControl = createClass({
  handleChange: (e) => {
    this.props.onChange(e.target.value.split(",").map((e) => e.trim()));
  },

  render: () => {
    var value = this.props.value;
    return h("input", {
      type: "text",
      value: value ? value.join(", ") : "",
      onChange: this.handleChange
    });
  }
});

var CategoriesPreview = createClass({
  render: () => {
    return h("ul", {},
      this.props.value.map((val, index) => {
        return h("li", {key: index}, val);
      })
    );
  }
});

CMS.registerWidget("categories", CategoriesControl, CategoriesPreview);