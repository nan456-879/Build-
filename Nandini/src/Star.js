import React from 'react';
import CountUp from 'react-countup'
import './App.css'
const Star = () => {
  return (
    <div>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-sm-12 col-lg-4 col-md-4'>
    <img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2023/03/logo_round.png'></img>
    </div>
    <div className='col-sm-12 col-lg-6 col-md-6 mt-5'>
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Send Inquiry</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Why choose</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Our Outless</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    <div className='col-sm-12 col-lg-2 col-md-2 mt-5'>
    <button className='btn btn-success'><i class="fa-regular fa-envelope"></i> Send Inquiry</button>
    </div>
    <img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2024/01/280Outlets-min-1536x804.jpg'></img>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-lg-6 col-md-6 mt-5'>
    <h2>Tealogy Cafe</h2>
    <p>Tealogy is an Indian cafe chain that focuses on tea-based beverages.
     Tealogy was founded in 2018 in Indore, India. Now we have 280+
     tea cafe outlets across India. We offer a variety of tea and
     beverages with some snacks as well. We provide the best taste of
     the kulhad tea & coffee at pocket prices. We always try to provide
     the best experience and complete satisfaction to our customers
      through our services with our variety of foods, beverages.</p>
     
    <p>Tealogy is an Indian cafe chain that focuses on tea-based beverages.
     Tealogy was founded in 2018 in Indore, India. Now we have 280+
     tea cafe outlets across India. We offer a variety of tea and
     beverages with some snacks as well. We provide the best taste of
     the kulhad tea & coffee at pocket prices. We always try to provide
     the best experience and complete satisfaction to our customers
      through our services with our variety of foods, beverages.</p>

     <p>Tealogy is an Indian cafe chain that focuses on tea-based beverages.
     Tealogy was founded in 2018 in Indore, India. Now we have 280+
     tea cafe outlets across India. We offer a variety of tea and
     beverages with some snacks as well. We provide the best taste of
     the kulhad tea & coffee at pocket prices. We always try to provide
     the best experience and complete satisfaction to our customers
      through our services with our variety of foods, beverages.</p>
    </div>
    <div className='col-sm-12 col-lg-6 col-md-6 mt-5'>
    <h3 class="text-center font-weight-bold">Send Inquiry & Get Detailed Information Now!</h3>
    <div class="container">
	 	<div class="col-lg-6 m-auto d-block">
	 		<form action="#" onsubmit="return validation()" class="bg-light">
	 			<div class="form-group">	
	 			<label for="user" class="font-weight-bold">Name</label>
	 			<input type="text" name="user" class="form-control" id="user" autocomplete="off"/>
	 			<span id="username" class="text-danger font-weight-bold"> </span>
	 			</div>
	 			<div class="form-group">
	 			<label class="font-weight-bold"> Password: </label>
	 			<input type="text" name="pass" class="form-control" id="pass" autocomplete="off"/>
	 			<span id="password" class="text-danger font-weight-bold"> </span>
	 			</div>
	 			<div class="form-group">
	 			<label class="font-weight-bold"> Confirm Password: </label>
	 			<input type="text" name="conpass" class="form-control" id="conpass" autocomplete="off"/>
	 			<span id="confrmpass" class="text-danger font-weight-bold"> </span>
	 			</div>
	 			<div class="form-group">
	 			<label  class="font-weight-bold" > Mobile Number: </label>
	 			<input type="text" name="mobile" class="form-control" id="mobileNumber" autocomplete="off"/>
	 			<span id="mobileno" class="text-danger font-weight-bold"> </span>
	 			</div>
	 			<div class="form-group">
	 			<label  class="font-weight-bold" > Email: </label>
	 			<input type="text" name="email" class="form-control" id="emails" autocomplete="off"/>
	 			<span id="emailids" class="text-danger font-weight-bold"> </span>
	 			</div>
	 			<div class="form-group">
	 			<label class="font-weight-bold"> Confirm Password: </label>
	 			<input type="text" name="conpass" class="form-control" id="conpass" autocomplete="off"/>
	 			<span id="confrmpass" class="text-danger font-weight-bold"> </span>
	 			</div>
<input type="submit" name="submit" value="submit" class="btn btn-success"  autocomplete="off"/>
</form><br/><br/>
</div> 
</div>
</div>
<div className='container'>
<div className='row'>
<div className='col-sm-12 col-md-3 col-lg-3'>
<CountUp end={120} duration={5} className='after'/>
<span className='after'>+</span>
<h4>CITIES</h4>
</div>
<div className='col-sm-12 col-md-3 col-lg-3' >
<CountUp end={280} duration={5}  className='after'/>
<span className='after'>+</span>
<h4>OUTLETS</h4>
</div>
<div className='col-sm-12 col-md-3 col-lg-3'>
<CountUp end={5} duration={5} className='after'/>
<span className='after'>B+</span>
<h4>KULHAD SERVED</h4>
</div>
<div className='col-sm-12 col-md-3 col-lg-3'>
<CountUp end={10} duration={5} className='after'/>
<span className='after'>M+</span>
<h4>Happy Face</h4>
</div>
<div className='mt-5'>
<div className='container' id='cafe'>
<div className='row'>
<div className='col-sm-12 col-lg-4 col-md-4 mt-4 text-light' id='monkey'>
<h2>Cafe Franchise Opportunities</h2>
<p>Are you looking for a high-return business opportunity? So
   you are in the right place. We are a rapidly growing café
    chain with more than 280+ outlets all over India. We offer
    the best cafe franchise opportunity to start your own
    business at the lowest cost with a high return on
    investment (ROI). Tealogy is not just a fast-food franchise 
    along with this is a tea café franchise too.</p>
</div>
<div className='col-sm-12 col-lg-4 col-md-4 mt-5 text-center'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/about_img.png' width='60%' height='190px'></img>
</div>
<div className='col-sm-12 col-lg-4 col-md-4 mt-4 text-light' id='monkey'>
<h2>Franchise Business Opportunities For You</h2>
<p>Are you looking for a high-return business opportunity? So
   you are in the right place. We are a rapidly growing café
    chain with more than 280+ outlets all over India. We offer
    the best cafe franchise opportunity to start your own
    business at the lowest cost with a high return on
    investment (ROI). Tealogy is not just a fast-food franchise 
    along with this is a tea café franchise too.</p>
</div>
</div>
</div>
</div>
<h1 className='text-center mt-5'>Why Choose Tealogy as Best Cafe Franchise?</h1>
<div className='container mt-4'>
<div className='row'>
<div className='col-sm-12 col-md-4 col-lg-4 text-center' id='moon'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/menu.png' className='zip-in-out-box'></img>
<h5>Scrumptious Menu with Pocket</h5>
<h5> Pricing</h5>
</div>
<div className='col-sm-12 col-md-4 col-lg-4 text-center' id='moon'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/taste.png' className='zip-in-out-box'></img>
<h5>We offer Hygienic & Standard Tasty Food</h5>
</div>
<div className='col-sm-12 col-md-4 col-lg-4 text-center' id='moon'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/training.png' className='zip-in-out-box'></img>
<h5>We provide Training to Staff members</h5>
</div>
</div>
<div className='container mt-5'>
<div className='row'>
<div className='col-sm-12 col-md-4 col-lg-4 text-center' id='moon'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/brand.png' className='zip-in-out-box'></img>
<h5>Well-Known Brand</h5>
</div>
<div className='col-sm-12 col-md-4 col-lg-4 text-center' id='moon'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/model.png' className='zip-in-out-box'></img>
<h5>Proven Business Model</h5>
</div>
<div className='col-sm-12 col-md-4 col-lg-4 text-center' id='moon'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/roi.png' className='zip-in-out-box'></img>
<h5>High ROI (Return on Investment)</h5>
</div>
</div>
<h1 className='text-center mt-3'>Our Outlets</h1>
<div className='container mt-4'>
<div className='row'>
<div className='col-sm-12 col-md-4 col-lg-4'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/Premium-Model.jpg' className='zoom'  width='100%' height='190px'></img>
<h4 className='pit'>PREMIUM MODEL</h4>
</div>
<div className='col-sm-12 col-md-4 col-lg-4'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/Medium-Model.jpg' className='zoom' width='100%' height='190px'></img>
<h4 className='pit'>MEDIUM MODEL</h4>
</div>
<div className='col-sm-12 col-md-4 col-lg-4'>
<img src='https://www.tealogy.in/get-franchise/wp-content/uploads/2022/09/Kiosk-Model.jpg'className='zoom'  width='100%' height='190px'></img>
<h4 className='pit'>KIOSK MODEL</h4>
</div>
<div className='text-center very mt-5 text-light'>
<h1>Contact Us</h1>
<h5><i class="fa-solid fa-phone"></i> +91 62629112500</h5>
<h5><i class="fa-solid fa-location-dot"></i> Head Office - 503-A/B, 5th Floor Princess Business Sky Park Block no. 23,24 SCH No.54, PU-3 Commercial, Opp C21, AB Rd, Indore, Madhya Pradesh 452001</h5>
<h5><i class="fa-solid fa-location-dot"></i> Company Outlet - UG - 7, PL-14, Airen Heights PU-3, Sch. No 54, Vijay Nagar, Indore</h5>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
)
}
export default Star
