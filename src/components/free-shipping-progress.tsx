import siteSettings from '@public/site.json';
import { useSiteContext } from '@src/context/site-context';
import { numberFormat } from '@src/lib/helpers/product';
import { SettingProps } from '@src/models/settings';

export const FreeShippingProgress = () => {
  const { cart, availableFreeShippingMethod, currentCurrency } = useSiteContext();

  if (!(siteSettings as SettingProps).showFreeShippingMinicartComponent) return null;
  const treshold = parseFloat(availableFreeShippingMethod?.minAmount || '');
  const cartSubtotal = parseFloat(cart?.subtotal || '0');
  const totalTax = parseFloat(cart?.totalTax || '0');
  const percentage = Math.ceil((cartSubtotal / treshold) * 100);

  if (!availableFreeShippingMethod || cartSubtotal === 0) {
    return null;
  }

  const getCustomerCurrencyMapping = () => {
    switch (currentCurrency) {
      case 'USD':
        return 'US';
      default:
        return 'AU';
    }
  };

  const renderMessage = () => {
    if (cartSubtotal + totalTax >= treshold) {
      // eslint-disable-next-line quotes
      return 'Congrats! You get free shipping!';
    }

    const remaining = Math.floor(treshold - cartSubtotal - totalTax);
    return `${getCustomerCurrencyMapping()} customers, You're ${numberFormat(
      remaining
    )} away from free shipping!`;
  };

  return (
    <>
      <div className="text-black text-center text-xs py-4">{renderMessage()}</div>
      <div className="w-full bg-gray-200 h-1.5 mb-4 dark:bg-gray-200">
        <div
          className="bg-black h-1.5 dark:bg-black"
          style={{
            width: `${percentage < 100 ? percentage : 100}%`,
          }}
        ></div>
      </div>
    </>
  );
};