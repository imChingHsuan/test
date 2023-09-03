const leftNavData = [
  {
    title: "產品",
    key: "product",
    sort: [
      {
        title: "上身",
        key: "top",
        items: [
          { title: "T恤", key: "tShirt", url: "/" },
          { title: "外套", key: "coat", url: "/" },
          { title: "襯衫", key: "blouse", url: "/" },
          { title: "毛衣", key: "tsweaterShirt", url: "/" },
        ],
      },
      {
        title: "下身",
        key: "bottom",
        items: [
          { title: "褲子", key: "pants", url: "/" },
          { title: "牛仔褲", key: "jeans", url: "/" },
          { title: "裙子", key: "skirt", url: "/" },
        ],
      },
      {
        title: "洋裝",
        key: "dress",
        items: [
          { title: "短洋裝", key: "short dress", url: "/" },
          { title: "長洋裝", key: "long dress", url: "/" },
        ],
      },
    ],
  },
  {
    title: "關於",
    key: "about",
    sort: [
      {
        title: "品牌",
        key: "brand",
        items: [
          { title: "品牌起源", key: "story", url: "/" },
          { title: "人才招募", key: "recruit", url: "/" },
        ],
      },
      {
        title: "公告事項",
        key: "announcement",
        items: [
          { title: "最新消息", key: "news", url: "/" },
          { title: "公告專區", key: "notice", url: "/" },
        ],
      },
    ],
  },
];
export default leftNavData;
