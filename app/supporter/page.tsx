import './SubscriptionTiers.css';

interface Tier {
    name: string;
    perks: Record<string, boolean | string>;
  }
  
  const tiers: Tier[] = [
    {
        name: "Free",
      perks: {
        "Price": "Free",
        "Support priority": false,
        "Special access in the Discord server": false,
        "Special visibility in public chat": false,
        "Ability to make a clan": false,
        "Supporter badge": false,
        "Friend slots": "25",
        "Profile effects": false,
        "GIF Profile pictures": false,
        "Banners on your profile": false,
        "Profile accent color": false,
        "Start-up noise (Active texture packs)": false,
        "In-game background (Active texture packs)": false,
      },
    }, 
    {
      name: "Jammer Dash Donator",
      perks: {
        "Price": "$2.99/mo, $24.99/yr",
        "Support priority": true,
        "Special access in the Discord server": true,
        "Special visibility in public chat": "Yellow Name",
        "Supporter badge": "Bronze",
        "Ability to make a clan": "Basic",
        "Friend slots": "50",
      },
    },
    {
        name: "Jammer Dash Supporter",
        perks: {
          "Price": "$5.99/mo, $59.99/yr",
          "Support priority": true,
          "Special access in the Discord server": "Gold Name",
          "Special visibility in public chat": true,
          "Ability to make a clan": "Normal",
          "Supporter badge": "Silver & Gold",
          "Friend slots": "100",
          "Profile effects": true,
          "GIF Profile pictures": true,
          "Banners on your profile": true,
          "Profile accent color": true,
          "Start-up noise (Active texture packs)": true,
          "In-game background (Active texture packs)": true,
        },
      },
  ];
  
  export default function SubscriptionTiers() {
    return (
      <div className="container p-6 mx-auto rounded-lg shadow-lg bg-black text-white">
        <h1 className="title text-3xl font-bold text-center mb-6">Jammer Dash Subscription Tiers</h1>
        <div className="table-container overflow-x-auto">
          <table className="table w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-4 text-left">Features</th>
                {tiers.map((tier, index) => (
                  <th key={index} className="p-4 text-center text-white">
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
  {Object.keys(tiers[0].perks).map((feature, index) => (
    <tr key={index} className="border-b border-gray-700 bg-gray-900 hover:bg-gray-800">
      <td className="p-4 text-left text-white font-semibold">{feature}</td>

      {tiers.map((tier, tierIndex) => (
        <td key={tierIndex} className="p-4 text-center text-white">
          {typeof tier.perks[feature] === "boolean" 
            ? (tier.perks[feature] ? '✔️' : '❌') 
            : tier.perks[feature] || '❌'} {/* Show ❌ for missing perks */}
        </td>
      ))}
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    );
  }
  