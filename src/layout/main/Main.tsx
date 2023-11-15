import React, { useEffect } from "react";
import "./Main.scss";
import { fetchPhotoData } from "../../store/action/getPhoto/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import ProductCard from "../../components/product-card/ProductCard";
import SpecialPromotionModal from "../../components/modal/SpecialPromotionModal";
const Main = () => {
  const { loading, data } = useSelector((state: any) => state.getPhotoReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotoData());
  }, [dispatch]);

  return (
    <div className="main-container">
      <SpecialPromotionModal />
      <div className="product-card-container">
        {loading ? (
          <Loader />
        ) : (
          data?.photos?.map((photo: any) => (
            <ProductCard
              url={photo.url}
              title={photo.title}
              user={photo.user}
              description={photo.description}
              id={photo.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Main;
