import React, { Component } from 'react'
import HeaderComp from './HeaderComp';
import ItemComp from './ItemComp';
import FooterComp from './FooterComp';
import BannerComp from './BannerComp';

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <HeaderComp/>

        <div className="container py-5">
            <BannerComp/>
        </div>

        <div className="container d-flex justify-content-between">
            <ItemComp/>
            <ItemComp/>
            <ItemComp/>
            <ItemComp/>
        </div>

        <FooterComp/>
      </div>
    )
  }
}
