import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <section className="top-header">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-xs-12 col-sm-4">
                    <div className="contact-number">
                        <i className="tf-ion-ios-telephone"></i>
                        <span>0812-1389-5247</span>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12 col-sm-4">
                   
                    <div className="logo text-center">
                        <a href="index.html">
                            <h1>GARASEL</h1>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12 col-sm-4">
                
                    <ul className="top-menu text-right list-inline">
                        <li className="dropdown cart-nav dropsown-slide">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i className="tf-ion-android-cart"></i>Cart</a>
                            <div className="dropdown-menu cart-dropdown">
                               
                                <div className="media">
                                    <a className="pull-left" href="#">
                                        <img className="media-object" src="images/shop/cart/cart-1.jpg" alt="image" />
                                    </a>
                                    <div className="media-body">
                                        <h4 className="media-heading"><a href="">Ladies Bag</a></h4>
                                        <div className="cart-price">
                                            <span>1 x</span>
                                            <span>1250.00</span>
                                        </div>
                                        <h5><strong>$1200</strong></h5>
                                    </div>
                                    <a href="#" className="remove"><i className="tf-ion-close"></i></a>
                                </div>

                                
                                <div className="media">
                                    <a className="pull-left" href="#">
                                        <img className="media-object" src="images/shop/cart/cart-2.jpg" alt="image" />
                                    </a>
                                    <div className="media-body">
                                        <h4 className="media-heading"><a href="">Ladies Bag</a></h4>
                                        <div className="cart-price">
                                            <span>1 x</span>
                                            <span>1250.00</span>
                                        </div>
                                        <h5><strong>$1200</strong></h5>
                                    </div>
                                    <a href="#" className="remove"><i className="tf-ion-close"></i></a>
                                </div>

                                
                                <div className="cart-summary">
                                    <span>Total</span>
                                    <span className="total-price">$1799.00</span>
                                </div>
                                <ul className="text-center cart-buttons">
                                    <li><a href="" className="btn btn-small">View Cart</a></li>
                                    <li><a href="" className="btn btn-small btn-solid-border">Checkout</a></li>
                                </ul>
                            </div>
                        </li>
                        
                       
                        <li className="dropdown search dropdown-slide">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i className="tf-ion-ios-search-strong"></i>Search</a>
                            <ul className="dropdown-menu search-dropdown">
                                <li><form action="post"><input type="search" className="form-control" placeholder="Search..."/></form></li>
                            </ul>
                        </li>

                        
                        <li className="commonSelect">
                            <select className="form-control">
                                <option>EN</option>
                                <option>DE</option>
                                <option>FR</option>
                                <option>ES</option>
                            </select>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </div>
    </section>


<section className="menu">
    <nav className="navbar navigation">
        <div className="container">
            <div className="navbar-header">
                <h2 className="menu-title">Main Menu</h2>
                <button type="button" className="navbat-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div> 

          
            <div id="navbar" className="navbar-collapse collapse text-center">
                <ul className="nav navbar-nav">

             
                <li className="dropdown"><a href="index.html">Home</a></li>

                
                <li><a href="shop.html">Shop</a></li>
                <li><a href="contact.html">Contact</a></li>

            
                <li><a href="#">Pages</a></li>

            
                <li className="dropdown dropdown-slide">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-hashpopup="true" aria-expanded="false">Blog <span className="tf-ion-ios-arrow-down"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Blog left Sidebar</a></li>
                        <li><a href="#">Blog Right Sidebar</a></li>
                        <li><a href="#">Blog Full Width</a></li>
                        <li><a href="#">Blog 2 Columns</a></li>
                        <li><a href="#">Blog Single</a></li>
                    </ul>
                </li>

               
                <li className="dropdown dropdown-slide">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Elements <span className="tf-ion-ios-arrow-down"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Typography</a></li>
                        <li><a href="#">Button</a></li>
                        <li><a href="#">Alerts</a></li>
                    </ul>
                </li> 
            </ul> 
           
            </div> 
        </div> 
    </nav>
</section>


<div className="home-slider">
    <div>
        <div className="slider-item dark-bg" style={{background:"url(./images/slider/slider-1.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="slide-inner text-left">
                            <h1>Minimal Summer Collection</h1>
                            <p>lorem ipsum</p>
                            <a href="" className="btn btn-main">Buy Now</a>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>


<section className="product-category section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title text-center">
                        <h2>Product Category</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="category-box">
                        <a href="">
                            <img src="images/shop/category/category-1.jpg" alt="" />
                            <div className="content">
                                <h3>Clothes sales</h3>
                                <p>Shop New Season Clothing</p>
                            </div>
                        </a>
                    </div>
                <div className="category-box">
                    <a href="">
                        <img src="images/shop/category/category-2.jpg" alt="" />
                        <div className="content">
                            <h3>Smart Casuals</h3>
                            <p>Get Wide Range Selection</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-md-6">
                <div className="category-box category-box-2">
                    <a href="">
                        <img src="images/shop/category/category-3.jpg" alt="" />
                        <div className="content">
                            <h3>Jewellry</h3>
                            <p>Special design Comes First</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="products section bg-gray">
    <div className="container">
        <div className="row">
            <div className="title text-center">
                <h2>Trendy Products</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="product-item">
                    <div className="product-thumb">
                        <span className="bage">Sale</span>
                        <img className="img-responsive" src="images/shop/products/product-1.jpg" alt="product-img" />
                        <div className="preview-meta">
                            <ul>
                                <li>
                                    <span data-toggle="modal" data-target="#product-modal">
                                        <i className="tf-ion-ios-search-strong"></i>
                                    </span>
                                </li>
                                <li>
                                    <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="tf-ion-android-cart"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-content">
                        <h4><a href="product-single.html">Reef Boardsport</a></h4>
                        <p className="price">$200</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="product-item">
                    <div className="product-thumb">
                        <span className="bage">Sale</span>
                        <img className="img-responsive" src="images/shop/products/product-1.jpg" alt="product-img" />
                        <div className="preview-meta">
                            <ul>
                                <li>
                                    <span data-toggle="modal" data-target="#product-modal">
                                        <i className="tf-ion-ios-search-strong"></i>
                                    </span>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="tf-ion-ios-heart"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="tf-ion-android-cart"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-content">
                        <h4><a href="product-single.html">Reef Boardsport</a></h4>
                        <p className="price">$200</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="product-item">
                    <div className="product-thumb">
                        <span className="bage">Sale</span>
                        <img className="img-responsive" src="images/shop/products/product-1.jpg" alt="product-img" />
                        <div className="preview-meta">
                            <ul>
                                <li>
                                    <span data-toggle="modal" data-target="#product-modal">
                                        <i className="tf-ion-ios-search-strong"></i>
                                    </span>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="tf-ion-ios-heart"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="tf-ion-android-cart"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-content">
                        <h4><a href="product-single.html">Reef Boardsport</a></h4>
                        <p className="price">$200</p>
                    </div>
                </div>
            </div>

  
        <div className="modal product-modal fade" id="product-modal">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="tf-ion-close"></i>
            </button>
            <div className="modal-dialog " role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <div className="modal-image">
                                    <img className="img-responsive" src="images/shop/products/modal-product.jpg" alt="product-img" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="product-short-details">
                                    <h2 className="product-title">GM Pendant, Basalt Grey</h2>
                                    <p className="product-price">$200</p>
                                    <p className="product-short-description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta
                                        cumque.
                                    </p>
                                    <a href="cart.html" className="btn btn-main">Add To Cart</a>
                                    <a href="product-single.html" className="btn btn-transparent">View Product Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    </div>
</section>


<section className="call-to-action bg-gray section">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="title">
                    <h2>SUBSCRIBE TO NEWSLETTER</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
                        <br/> facilis numquam impedit ut sequi. Minus facilis vitae excepturi sit laboriosam.</p>
                </div>
                <div className="col-lg-6 col-md-offset-3">
                    <div className="input-group subscription-form">
                        <input type="text" className="form-control" placeholder="Enter Your Email Address"/>
                        <span className="input-group-btn">
                            <button className="btn btn-main" type="button">Subscribe Now!</button>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>


<section className="section instagram-feed">
    <div className="container">
        <div className="row">
            <div className="title">
                <h2>View us on instagram</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div id="instafeed"></div>
            </div>
        </div>
    </div>
</section>



<footer className="footer section text-center">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <ul className="social-media">
                    <li>
                        <a href=""><i className="tf-ion-social-facebook"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="tf-ion-social-instagram"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="tf-ion-social-twitter"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="tf-ion-social-pinterest"></i></a>
                    </li>
                </ul>
                <ul className="footer-menu">
                    <li><a href="">CONTACT</a></li>
                    <li><a href="">SHIPPING</a></li>
                    <li><a href="">TERMS OF SERVICE</a></li>
                    <li><a href="">PRIVACY POLICY</a></li>
                </ul>
                <p className="copyright-text">Powered by Bootstrap</p>
            </div>
        </div>
    </div>
</footer>
    </div>
    </div>

    );
  }
}
export default App;
