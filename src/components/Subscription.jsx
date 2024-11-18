/* eslint-disable react/prop-types */

const SubscriptionPlan = ({ subscription }) => {
  const {
    planName,
    status,
    price,
    renewalDate,
    billingCycle,
    trialPeriod,
    benefits,
    usageStats,
    discounts,
    referralInfo,
    customFeatures,
  } = subscription;


  const colorPalette = [
    "bg-blue-100",
    "bg-gray-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-indigo-100",
    "bg-teal-100",
    "bg-red-100",
    "bg-orange-100",
    "bg-lime-100",
    "bg-emerald-100",
    "bg-cyan-100",
    "bg-fuchsia-100",
    "bg-rose-100",
    "bg-amber-100",
    "bg-sky-100",
    "bg-violet-100",
    "bg-zinc-100",
    "bg-stone-100",
  ];


  const randomColor =
    colorPalette[Math.floor(Math.random() * colorPalette.length)];

  return (
    <div
      className={`p-6 my-4 rounded-xl shadow-lg flex flex-col h-96 overflow-y-scroll ${randomColor}`}
    >
      <h3 className="text-2xl font-semibold">{planName}</h3>
      <p
        className={`text-lg font-medium mt-2 ${
          status === "Active" ? "text-green-600" : "text-red-600"
        }`}
      >
        {status}
      </p>

      <div className="mt-4">
        <h4 className="font-medium text-xl">Price: {price}</h4>
        <p className="text-sm text-gray-600">Renewal Date: {renewalDate}</p>
        <p className="text-sm text-gray-600">Billing Cycle: {billingCycle}</p>
        {trialPeriod && (
          <p className="text-sm text-gray-600">Trial Period: {trialPeriod}</p>
        )}
      </div>

      {/* Benefits */}
      <div className="mt-4">
        <h4 className="font-medium text-xl">Benefits:</h4>
        <ul className="list-disc pl-6 space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-gray-700">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Usage Stats */}
      <div className="mt-4">
        <h4 className="font-medium text-xl">Usage Stats:</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Storage Used: {usageStats.storageUsed}</li>
          <li>Data Limit: {usageStats.dataLimit}</li>
          <li>Devices Linked: {usageStats.devicesLinked}</li>
          <li>Video Hours Watched: {usageStats.videoHoursWatched}</li>
        </ul>
      </div>

      {/* Discount */}
      {discounts && discounts.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium text-xl">Discounts:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {discounts.map((discount, index) => (
              <li key={index}>
                <span className="font-semibold">{discount.discountCode}</span>:{" "}
                {discount.amountOff} off - Valid until {discount.validUntil}
                <p className="text-xs text-gray-500">{discount.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Referral Info */}
      {referralInfo && (
        <div className="mt-4">
          <h4 className="font-medium text-xl">Referral Info:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Referral Code: {referralInfo.referralCode}</li>
            <li>Referred Users: {referralInfo.referredUsers}</li>
            <li>Bonus Earned: {referralInfo.bonusEarned}</li>
            <li>
              Last Referred User: {referralInfo.lastReferredUser || "N/A"}
            </li>
          </ul>
        </div>
      )}

      {/* Custom Features */}
      <div className="mt-4 flex-grow">
        <h4 className="font-medium text-xl">Custom Features:</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Theme: {customFeatures.customTheme}</li>
          <li>
            Personalized Recommendations:{" "}
            {customFeatures.personalizedRecommendations
              ? "Enabled"
              : "Disabled"}
          </li>
          <li>
            Priority Support: {customFeatures.prioritySupport ? "Yes" : "No"}
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <button className="btn bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 w-full">
          Buy this plan
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
