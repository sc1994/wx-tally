Component({
  data: {
    active: 2
  },
  // event.detail 的值为当前选中项的索引
  onChange: function (event) {
    console.error(event.detail);
  },
  handleClick() {
    console.error(1)
  }
})