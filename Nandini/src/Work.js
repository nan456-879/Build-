import React from 'react'
const Work = () => {
  return (
    <div>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-sm-12 col-lg-10 col-md-10'>
    <h5>envatomarket</h5>
    </div>
    <div className='col-sm-12 col-lg-2 col-md-2'>
    <button className='btn btn-success mt-2'>Buy Now</button>
    </div>
    </div>
</div>
<div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-lg-3 col-md-3'>
    <img src='https://viatour-reactjs.ibthemespro.com/img/general/logo-1.svg'></img>
    </div>
    <div className='col-sm-12 col-lg-9 col-md-9'>
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <nav class="navbar navbar-light">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
</nav>
      <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Destination
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Activities
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   USD
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<li class="nav-item">
          <a class="nav-link active">sign up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Log in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
    <div class="card bg-dark text-white">
  <img src="https://viatour-reactjs.ibthemespro.com/img/hero/1/1.png" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title text-light text-center mt-5">Your world of joy</h1>
    <h6 class="card-text text-light text-center mt-2">From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</h6>
  <span>  <i class="fa-solid fa-location-dot"></i>   Where Search destinations</span>
<span>   <i class="fa-solid fa-calendar-days"></i>   when may 05 ~ June 14</span>
<span>   <i class="fa-regular fa-flag"></i>   Tour Type All Tour</span>
<span><nav class="navbar navbar-light">
  <div class="container-fluid">
    <form class="d-flex">
      <button class="btn btn-light" type="submit">Search</button>
    </form>
  </div>
</nav>
</span>
  </div>
  </div>
    </div>
    </div>
  )
}

export default Work