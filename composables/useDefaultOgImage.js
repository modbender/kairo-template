export default function () {
  const img = useImage();
  const config = useRuntimeConfig();

  const siteConfig = useSiteConfig();

  const siteIcons = config.public.siteIcons;

  const defaultImageOpts = {
    format: "png",
    quality: 80,
  };

  return siteIcons.map((icon) => {
    const iconSizes = icon.sizes.split("x");
    const iconWidth = parseInt(iconSizes[0]);
    const iconHeight = parseInt(iconSizes[1]);

    const imgUrl = img(icon.src, {
      width: iconWidth,
      height: iconHeight,
      ...defaultImageOpts,
    });

    return {
      url: imgUrl,
      width: iconWidth,
      height: iconHeight,
      alt: siteConfig.name,
      type: icon.type,
    };
  });
}
