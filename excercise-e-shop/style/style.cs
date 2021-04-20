*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  color: #333333; }

html {
  font-size: 16px; }

a {
  text-decoration: none;
  color: #787885; }

ul,
li {
  list-style: none; }

select {
  appearance: none; }

body {
  position: relative; }

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible; }

.container {
  max-width: 1152px;
  margin: auto; }

.flex-r {
  display: flex;
  justify-content: space-between; }

.flex {
  display: flex; }

.flex-e {
  display: flex;
  justify-content: flex-end; }

.flex-s {
  display: flex;
  justify-content: flex-start; }

.flex-w {
  display: flex;
  flex-wrap: wrap; }

.header {
  position: absolute;
  width: 100%;
  padding: 48px 0;
  z-index: 50; }

.header-left,
.header-right {
  width: 10%; }

.header-center {
  width: 30%; }
  .header-center .nav-link {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #fbb03b; }

.header-right .person-group {
  width: 100%; }

.header-right .search {
  position: relative; }
  .header-right .search .search-txt {
    position: absolute;
    right: 0; }

.footer {
  color: #fff;
  background-color: #fbb03b; }
  .footer a {
    color: #fff; }
  .footer .footer-info {
    padding: 40px 0 32px; }
    .footer .footer-info .footer-left {
      max-width: 543px;
      padding-right: 169px; }
    .footer .footer-info .footer-right {
      max-width: 686px;
      font-size: 14px;
      line-height: 150%; }

.footer-left .footer-content {
  padding: 24px 0 62px 0;
  font-size: 14px;
  line-height: 21px;
  color: #fff; }

.footer-left .footer-network {
  max-width: 203px; }

.footer-right .genenal-info {
  display: flex;
  flex-wrap: wrap;
  gap: 52px;
  padding: 0; }
  .footer-right .genenal-info .shopping-online {
    padding-right: 35px; }
  .footer-right .genenal-info .info-item, .footer-right .genenal-info .info-link {
    font-size: 14px;
    line-height: 1.50;
    font-weight: 400; }
  .footer-right .genenal-info .info-group {
    padding-right: 8px; }
    .footer-right .genenal-info .info-group li {
      color: #fff;
      padding-bottom: 19px; }
  .footer-right .genenal-info .info-title {
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    padding-bottom: 19px;
    color: #fff; }

.ft-bottom .ft-bottom-title {
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  padding: 24px 0;
  color: #fff;
  border-top: 1px solid #fff; }

.banner {
  position: relative;
  width: 100%;
  height: 800px;
  background-image: url("../asset/main/background-header.png");
  background-size: cover;
  z-index: 0; }
  .banner::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%);
    opacity: 0.7;
    z-index: -10; }
  .banner .section-content {
    max-width: 403px;
    padding: 222px 0 248px 0;
    margin-left: 240px;
    z-index: 10; }
    .banner .section-content .title, .banner .section-content .title .highlight {
      padding-bottom: 24px;
      font-weight: bold;
      font-size: 72px;
      line-height: 1.015;
      color: #fff; }
      .banner .section-content .title .highlight {
        color: #fbb03b; }
    .banner .section-content .shop-now-group .shop-now-icon {
      padding-right: 21px; }
    .banner .section-content .shop-now-group .shop-now-link {
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      text-decoration-line: underline;
      color: #fff; }
  .banner .section-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    max-width: 1100px;
    background-color: #fff;
    border-top-right-radius: 70px; }
    .banner .section-footer .footer-bg-group {
      padding: 38px 88px 24px 240px; }

.footer-bg-group .footer-bg-item {
  margin: 0 24px;
  min-width: 202px;
  align-items: start; }
  .footer-bg-group .footer-bg-item .footer-bg-icon {
    margin-right: 20px; }
  .footer-bg-group .footer-bg-item .item-content .item-title {
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #333333; }
  .footer-bg-group .footer-bg-item .item-content .item-des {
    font-size: 12px;
    line-height: 18px;
    color: #A8A8A8; }

.collection-section {
  padding: 48px 0; }
  .collection-section .collection-group {
    display: flex;
    grid-gap: 20px; }
    .collection-section .collection-group .item:nth-child(1) {
      flex: 2;
      background-image: url("../asset/sample/product-1.png");
      background-repeat: no-repeat; }
    .collection-section .collection-group .item:nth-child(2) {
      flex: 1;
      background-image: url("../asset/sample/product-2.png");
      background-repeat: no-repeat; }
    .collection-section .collection-group .item:nth-child(3) {
      flex: 1;
      background-image: url("../asset/sample/product-3.png");
      background-repeat: no-repeat; }
    .collection-section .collection-group .item {
      position: relative;
      height: 359px;
      z-index: 0; }
      .collection-section .collection-group .item p {
        padding: 173px 40px 0 40px;
        font-size: 24px;
        line-height: 36px;
        color: #fff; }

.item .btn-show {
  position: absolute;
  left: 40px;
  bottom: 53px;
  padding: 14px 18px;
  margin-left: 0 0 53px 40px;
  background-color: #fff;
  border-radius: 24px; }
  .item .btn-show :first-child {
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    color: #333333; }

.item.sell-off::before {
  position: absolute;
  content: attr(data-off);
  top: 129px;
  left: 40px;
  padding: 6px 13px;
  border-radius: 20px;
  color: #fff;
  background-color: #f00; }

.item::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333333;
  opacity: 0.5;
  z-index: -1; }

.product-section {
  padding: 48px 0; }
  .product-section .product {
    position: relative; }
    .product-section .product::before {
      position: absolute;
      content: attr(data);
      right: 0;
      top: 0;
      padding: 14px 30px;
      font-weight: bold;
      font-size: 13px;
      text-transform: uppercase;
      line-height: 19px;
      border: 1px solid #C4C4C4;
      border-radius: 39px; }
  .product-section .product-today .product-title {
    text-align: center; }
  .product-section .product-list-title, .product-section .product-today-title {
    padding-bottom: 39px;
    font-weight: 300;
    font-size: 32px;
    line-height: 48px; }
  .product-section .product-today-title {
    text-align: center; }
  .product-section .product-group {
    gap: 20px; }
    .product-section .product-group .product-item .item-img {
      padding-bottom: 15px; }

.product-item {
  position: relative; }
  .product-item .item-img {
    padding-bottom: 15px; }
  .product-item .item-name {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px; }
  .product-item .item-price {
    position: relative;
    font-size: 20px;
    line-height: 30px; }
    .product-item .item-price.price-off {
      color: #f00; }
    .product-item .item-price.tag::after {
      position: absolute;
      content: attr(real-price);
      right: 0;
      top: 0;
      font-size: 20px;
      line-height: 30px;
      color: #CECECE; }
  .product-item.tag::before {
    position: absolute;
    content: attr(sell-off);
    top: 30px;
    left: 27px;
    padding: 6px 9px;
    color: #fff;
    background-color: #f00;
    border-radius: 20px; }

.benefit-section {
  background-color: #F7F7F7; }
  .benefit-section .benefit {
    padding: 48px 0 54px 0; }
  .benefit-section .benefit-title {
    padding-bottom: 50px;
    font-weight: 300;
    font-size: 32px;
    line-height: 48px;
    text-align: center; }
  .benefit-section .benefit-content {
    grid-gap: 49px; }

.benefit-item .item-img {
  position: relative;
  width: 68px;
  height: 68px;
  margin-bottom: 46px;
  background-color: #fff;
  border-radius: 10px; }
  .benefit-item .item-img .benefit-icon {
    position: absolute;
    width: 37px;
    height: 37px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); }

.benefit-item .benefit-title {
  padding-bottom: 16px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px; }
  .benefit-item .benefit-title.hover {
    color: #fbb03b; }

.benefit-item .benefit-des {
  font-size: 14px;
  line-height: 21px;
  color: #808080; }

.subscribe-section {
  position: relative;
  background-image: url("../asset/main/background-footer.png");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0; }
  .subscribe-section::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, #000000 33.28%, rgba(0, 0, 0, 0) 94.05%);
    top: 0;
    left: 0;
    opacity: 0.7;
    z-index: -10; }
  .subscribe-section .sub-info {
    width: 50%;
    padding: 85px 0;
    font-size: 24px;
    line-height: 36px;
    color: #fff; }
  .subscribe-section .sub-email {
    width: 50%;
    padding: 99px 0 95px 0; }
    .subscribe-section .sub-email .your-mail {
      border-radius: 61px;
      background-color: #fff;
      width: 100%;
      align-items: center;
      padding: 14px 24px; }
      .subscribe-section .sub-email .your-mail .mail {
        width: 100%;
        height: 20px;
        border: none;
        outline: none;
        font-size: 13px;
        line-height: 19px;
        color: #ABABAB; }
    .subscribe-section .sub-email .button {
      background-color: #fbb03b;
      border-radius: 56px;
      padding: 14px 52px;
      margin-left: 40px;
      font-weight: bold;
      font-size: 13px;
      line-height: 19px;
      text-align: center; }
