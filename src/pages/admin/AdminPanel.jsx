import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Wallet from "./components/Wallet";
import Waitlist from "./components/Waitlist";
import Sellorder from "./components/Sellorder";
import Listing from "./components/Listing";
import Inventory from "./components/Inventory";
import Stock from "./components/Stock";
import Invoice from "./components/Invoice";
import Buyorders from "./components/Buyorders";

const AdminPanel = () => {
  const menuArray = [
    {
      id: 1,
      name: "Dashboard",
    },
    {
      id: 2,
      name: "Products",
    },
    {
      id: 3,
      name: "Wait list",
    },

    {
      id: 4,
      name: "Buy Orders",
    },
    {
      id: 5,
      name: "Sell Orders",
    },
    {
      id: 6,
      name: "Stock & Prices",
    },
    {
      id: 7,
      name: "Inventory & Stocks",
    },

    {
      id: 8,
      name: "Invoices",
    },

     {
      id: 9,
      name: "Listing Pages",
    },
      {
      id: 10,
      name: "Wallet",
    },
  ];

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-1/5 bg-black min-h-screen p-5">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/466/715/small/black-nd-initial-letter-in-rectangle-shape-free-vector.jpg"
          className="h-16 w-26 rounded-lg"
          alt="Logo"
        />

        <div className="py-12">
          {menuArray.map((item) => (
            <div  key={item.id} className="text-white py-2 mb-2 flex items-center gap-2">
              <div className="w-4 h-4 bg-white rounded"></div>
              <p> {item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-4/5">
        {/* <Products /> */}
        {/* < Wallet /> */}
        {/* < Waitlist /> */}
        {/* < Stock />
        
        < Sellorder /> */}
        {/* <Listing /> */}
        {/* <Invoice /> */}
        {/* <Inventory /> */}
        {/* <Dashboard /> */}
       <Buyorders />



      </div>
    </div>
  );
};

export default AdminPanel;
