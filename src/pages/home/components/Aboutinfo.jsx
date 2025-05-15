import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";

const Aboutinfo = () => {
  const product = useSelector((state) => state.product?.productss);
  console.log(product, "product1");
  

  const columns = [
    { field: "title", header: "Title" },
    { field: "brand", header: "Brand" },
    { field: "category", header: "Category" },
    { field: "description", header: "Description" },
    { field: "price", header: "Price" },
    { field: "rating", header: "Rating" },
    { field: "stock", header: "Stock" },
  ];

  return (
    <div className="container mx-auto lg:py-16 md:py-10 py-6 lg:px-12 md:px-8 px-5">
      <div className="lg:flex md:flex  justify-center items-center gap-12">
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <img
            className="w-full h-420px sm-h-300px object-cover lg:mt-0 md:mt-0 mt-10"
            src="https://carboncircle.in/img/About%20Us.122a4493.jpg"
            alt="About Image"
          />
        </div>

        <div className="text-lg text-gray- lg:w-1/2 md:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 lg:mt-0 md:mt-0 mt-10">
            About Us
          </h2>
          <p className="">
            Carbon Circle develops, owns and operates renewable natural gas and
            organic fertilizer projects across India. We are a team of seasoned
            professionals from the energy, infrastructure, waste and
            agribusiness sectors.
          </p>
          <button className="mt-6 w-40 px-6 py-3 bg-lime-600 text-white">
            Explore
          </button>
        </div>
      </div>

      <div className="mt-12">
        <DataTable value={product} tableStyle={{ minWidth: "50rem" }}>
          {columns.map((col, i) => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default Aboutinfo;
