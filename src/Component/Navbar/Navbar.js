import React from 'react';

const Navbar = () => {
    return (
        <>
              
            <nav class="navbar navbar-expand-lg navbar-light bg-light pb-0">
            <img src="https://i.ibb.co/PF9hPdC/Group-45-2xx.png" style={{marginTop:"0px",marginRight:"0px"}}/>
  <div className="container">
  
  
<img src="https://i.ibb.co/W3CWZd7/Group-86.png" style={{width:"20%",marginLeft:"-270px",paddingLeft:""}} alt=""/>
        
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link pr-5" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
        </li>
        <li class="nav-item">
          <a class="nav-link pr-5" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link pr-5" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link pr-5" href="#">Pricing</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link pr-5" href="#">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
};

export default Navbar;