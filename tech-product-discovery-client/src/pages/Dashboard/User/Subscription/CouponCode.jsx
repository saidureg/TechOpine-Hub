import { useState } from "react";
import useCoupon from "../../../../hooks/useCoupon";
import usePayment from "../../../../hooks/usePayment";
import { Link } from "react-router-dom";

const CouponCode = () => {
  const [coupon, refetch] = useCoupon();
  const [payments] = usePayment();
  const [paymentAmount, setPaymentAmount] = useState(1000);

  const handlePayment = (e) => {
    e.preventDefault();
    const form = e.target;
    const couponCode = form.coupon_code.value;

    const appliedCoupon = coupon.find(
      (data) => data.coupon_code === couponCode
    );

    if (appliedCoupon) {
      const discount = parseInt(appliedCoupon.discount_amount);
      const discountAmount = paymentAmount - discount;
      setPaymentAmount(discountAmount);
      refetch();
    } else {
      setPaymentAmount(1000);
    }

    form.reset();
  };

  return (
    <div>
      {payments.length > 0 ? (
        <div>
          <p>
            Membership Status:
            <span className="p-1 px-2 text-xs text-white bg-[#af4053] rounded-lg mr-5">
              {/*  */}
              Verified
            </span>
          </p>
        </div>
      ) : (
        <div>
          <form
            onSubmit={handlePayment}
            className="relative flex justify-center items-center my-4"
          >
            <input
              name="coupon_code"
              type="text"
              placeholder="Coupon Code"
              className="input input-bordered w-11/12 md:w-full max-w-md text-[#0B0B0B66]"
            />
            <button className="py-3 px-5 bg-[#FF444A] rounded-r-lg text-white  absolute right-[10px] md:right-[2px] lg:right-[3px]">
              Apply
            </button>
          </form>
          <Link
            to={{
              pathname: "/dashboard/payment",
              state: { paymentAmount },
            }}
          >
            <button className="bg-[#F43F5E] px-10 py-2 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block">
              Subscribe <span>{paymentAmount}</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CouponCode;
