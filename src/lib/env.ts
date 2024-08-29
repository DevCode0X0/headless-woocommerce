export const env = () => {
  const NEXT_PUBLIC_CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL;
  const NEXT_PUBLIC_GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;
  const NEXT_PUBLIC_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  const NEXT_PUBLIC_META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const NEXT_PUBLIC_LIVE_URL = process.env.NEXT_PUBLIC_LIVE_URL;
  const NEXT_PUBLIC_REVIEW_SERVICE = process.env.NEXT_PUBLIC_REVIEW_SERVICE;
  const NEXT_PUBLIC_STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;
  const NEXT_PUBLIC_TYPESENSE_HOST = process.env.NEXT_PUBLIC_TYPESENSE_HOST;
  const NEXT_PUBLIC_TYPESENSE_PUBLIC_KEY = process.env.NEXT_PUBLIC_TYPESENSE_PUBLIC_KEY;
  const NEXT_PUBLIC_WORDPRESS_SITE_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;
  const NEXT_PUBLIC_FRONTEND_SITE_URL = process.env.NEXT_PUBLIC_FRONTEND_SITE_URL;
  const REVIEW_SERVICE_KEY = process.env.REVIEW_SERVICE_KEY;
  const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY;
  const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET;
  const NEXT_PUBLIC_SHOP_NAME = process.env.NEXT_PUBLIC_SHOP_NAME;
  const NEXT_PUBLIC_COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
  const KLAVIYO_PUBLIC_KEY = process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY;
  const YOTPO_REWARDS_GUID = process.env.NEXT_PUBLIC_YOTPO_REWARDS_GUID;

  const GRAVITY_FORM_KEY = process.env.GRAVITY_FORM_KEY;
  const GRAVITY_FORM_SECRET = process.env.GRAVITY_FORM_SECRET;

  const JUDGEME_SHOP_DOMAIN = process.env?.JUDGEME_SHOP_DOMAIN;

  return {
    NEXT_PUBLIC_CHECKOUT_URL,
    NEXT_PUBLIC_GRAPHQL_URL,
    NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_META_PIXEL_ID,
    NEXT_PUBLIC_LIVE_URL,
    NEXT_PUBLIC_REVIEW_SERVICE,
    NEXT_PUBLIC_STORE_ID,
    NEXT_PUBLIC_TYPESENSE_HOST,
    NEXT_PUBLIC_TYPESENSE_PUBLIC_KEY,
    NEXT_PUBLIC_WORDPRESS_SITE_URL,
    NEXT_PUBLIC_FRONTEND_SITE_URL,
    REVIEW_SERVICE_KEY,
    WC_CONSUMER_KEY,
    WC_CONSUMER_SECRET,
    GRAVITY_FORM_KEY,
    GRAVITY_FORM_SECRET,
    NEXT_PUBLIC_SHOP_NAME,
    NEXT_PUBLIC_COOKIE_DOMAIN,
    KLAVIYO_PUBLIC_KEY,
    YOTPO_REWARDS_GUID,
    JUDGEME_SHOP_DOMAIN,
  };
};