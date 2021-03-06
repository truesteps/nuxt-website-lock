import Middleware from './middleware';
import Config from './nuxt-website-lock/config';
import {Storage} from './nuxt-website-lock/storage';
import {getWebsiteLock} from './nuxt-website-lock/main';

Middleware.WebsiteLock = async function (ctx) {
  await ctx.$websiteLock.checkIfUserCanRedirect();
};

export default function (ctx, inject) {
  const options = {
    ...Config,
    ...JSON.parse('<%= JSON.stringify(options) %>'),
  };

  const storage = new Storage(ctx, options)
  const $websiteLock = getWebsiteLock({options, ctx, storage})

  if ($websiteLock.isServerValidationEnabled && $websiteLock.hasToken()) {
    ctx.$axios.setHeader('Website-Lock-Token', $websiteLock.getToken())
  }

  inject('websiteLock', $websiteLock);
  ctx.$websiteLock = $websiteLock;

  return $websiteLock;
}
