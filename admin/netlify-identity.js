if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", function (user) {
    if (!user) {
      window.netlifyIdentity.on("login", function() {
        document.location.href = "/admin/";
      });
    }
  });
}

var CategoriesControl = createClass({
  handleChange: function (e) {
    this.props.onChange(e.target.value.split(",")
      .map(function(e) {
        e.trim();
      })
    );
  },

  render: function() {
    var value = this.props.value;
    return h("input", {
      type: "text",
      value: value ? value.join(", ") : "",
      onChange: this.handleChange
    });
  }
});

var CategoriesPreview = createClass({
  render: function() {
    return h("ul", {},
      this.props.value.map(function(val, index) {
        return h("li", {key: index}, val);
      })
    );
  }
});

CMS.registerWidget("categories", CategoriesControl, CategoriesPreview);