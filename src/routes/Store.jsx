import React from "react";
import Navbar from "../components/Navbar";
import ItemBoxStore from "../components/ItemBoxStore";
const Store = () => {
  return (
    <div
      className="flex flex-col min-h-screen
    "
    >
      <Navbar></Navbar>
      <div className="flex p-6">
        <div class="grid grid-cols-4 gap-4">
          <ItemBoxStore
            name={"Fayra Blouse"}
            price={46.99}
            url={
              "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt5.jpeg?alt=media&token=ea472311-4401-4d70-aed5-53f44ea5b5ac"
            }
          ></ItemBoxStore>
          <ItemBoxStore
            name={"Shalima Dress"}
            price={79.99}
            url={
              "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt6.jpeg?alt=media&token=e4791c34-70e8-498f-af46-33f1df83f692"
            }
          ></ItemBoxStore>
          <ItemBoxStore
            name={"Slavia Turnic"}
            price={69.99}
            url={
              "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt7.jpeg?alt=media&token=e6e6c05f-3771-427b-aaa9-5f3f925aa88c"
            }
          ></ItemBoxStore>
          <ItemBoxStore
            name={"Silva Blouse Tosca"}
            price={56.99}
            url={
              "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt8.jpeg?alt=media&token=ddf86082-c323-4301-b69b-c2e84ff5d520"
            }
          ></ItemBoxStore>
        </div>
      </div>
    </div>
  );
};

export default Store;
