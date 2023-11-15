import React, { useEffect, useState } from 'react'
import style from './main.module.scss';
import { fetchPhotoData } from '../../store/action/getPhoto/action';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import Loader from '../../components/loader/Loader';
import ProductCard from '../../components/product-card/ProductCard';
const Main = () => {

    const {loading, error, data} = useSelector((state:any) => state.getPhotoReducer)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPhotoData())
    },[dispatch])

  return (
    <div className={style['main-container']}>
      {loading ? <Loader /> : data?.photos?.map((photo:any) => (
        <ProductCard url={photo.url} title={photo.title} user={photo.user} description={photo.description} id={photo.id} />
      ))}
    </div>
  )
}

export default Main