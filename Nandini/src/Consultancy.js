import React, {useEffect}from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "aos/dist/aos.css";
import Aos from 'aos'
import './App.css'
const Consultancy = () => {
    useEffect(() =>{
      Aos.init();
    }, []);
  return (
    <div>
     <div className='container-fluid ask'>
    <div className='row'>
    <div className='col-sm-12 col-lg-5 col-md-5 mt-3'>
    <img src='https://www.digitalnexa.com/hs-fs/hubfs/Digital%20Nexa/Home/Logo/BRC_NEXA_LOGO_WHITE%20(2)%20(1).png?width=393&height=88&name=BRC_NEXA_LOGO_WHITE%20(2)%20(1).png' width={'30%'}></img>
    </div>
    <div className='col-sm-12 col-md-7 col-lg-7'>
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light">Our clients</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" >Our Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" >Our methodology</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" >Our team</a>
        </li>
        <button className='btn btn' id='water'>Get&nbsp;in&nbsp;Touch</button>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
    </div>
    <div class="card bg-dark text-white">
  <img src="https://www.digitalnexa.com/hubfs/pexels-fauxels-3184339.jpg" width={'100%'} height={'500px'} id='roted'
  />
  <div class="card-img-overlay">
        <h1 className='text-center hit' id='team'>Elevate Your Business with Consultancy Rooted in Data-Driven</h1>
             <h1 className='text-center' id='team'>Strategies, Backed by Psychology, and Refined by Agency Experience</h1>
             <div className='text-center'><button className='btn btn' id='in'>Get In Touch</button></div>
    </div>
    </div>
    <div id='touch'>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-lg-6 col-md-6 mt-4 text-light' data-aos='fade-up' id='market'>
    <h1 className='mt-4' id='pen'>About Us</h1>
    <h5 className='mt-4'>At NEXA CONSULT, we are a dedicated team of marketing </h5>
    <h5>consultants committed to driving business success through</h5>
    <h5>digital solutions.focused on delivering cutting-edge</h5>
    <h5>and insights for businesses looking to enhance their digital</h5>
    <br/>
    <h5>With a wealth of experience  Marketing Strategy, Go-to-</h5>
    <h5>Strategy, Internal Branding Consultancy, Strategic Market</h5>
    <h5>Campaign Strategy, and Content Strategy, uniquely position</h5>
    <h5>offer comprehensivecustomized guidance.approach </h5>
    <h5>innovative thinking, deep industry knowledgecommitment</h5>
    <h5>achieving measurable results.</h5> 
    <br/>
    <h5>Partner with us transform your marketing endeavors </h5>
    <h5>business outcomes.</h5>
    <button className='btn btn' id='or'>Get In Touch</button>
    </div>
    <div className='col-sm-12 col-lg-6 col-md-6 mt-4'  data-aos='fade-left'>
    <img src='https://www.digitalnexa.com/hubfs/raw_assets/public/@marketplace/Drive_Web_Studio/Interactive/images/img2.jpg' width={'100%'} height={'500px'}></img>
    </div>
    </div>
    </div>
     <marquee direction='right'><img src='https://www.digitalnexa.com/hs-fs/hubfs/pwc_whitelogo.png?width=1772&height=1182&name=pwc_whitelogo.png' width={'20%'} height={'90px'}></img> <img src='https://www.digitalnexa.com/hs-fs/hubfs/almalasers_whitelogo.png?width=1772&height=1182&name=almalasers_whitelogo.png' width={'20%'} height={'90px'}></img>   
     <img src='https://www.digitalnexa.com/hs-fs/hubfs/barcelo_whitelogo.png?width=1772&height=1182&name=barcelo_whitelogo.png' width={'20%'} height={'90px'}></img>   <img src='https://www.digitalnexa.com/hs-fs/hubfs/Tilda%20Blue%20(1).png?width=442&height=226&name=Tilda%20Blue%20(1).png' width={'20%'} height={'90px'}></img>   <img src='https://www.digitalnexa.com/hs-fs/hubfs/kornferry_whitelogo.png?width=1772&height=1182&name=kornferry_whitelogo.png' width={'20%'} height={'90px'}></img>  
     <img src='https://www.digitalnexa.com/hs-fs/hubfs/mickinsey_whitelogo.png?width=1772&height=1182&name=mickinsey_whitelogo.png' width={'20%'} height={'90px'}></img>
     <img src='https://www.digitalnexa.com/hs-fs/hubfs/101group_whiotelogo.png?width=1772&height=1182&name=101group_whiotelogo.png' width={'20%'} height={'90px'}></img>
     <img src='https://www.digitalnexa.com/hs-fs/hubfs/101group_whiotelogo.png?width=1772&height=1182&name=101group_whiotelogo.png' width={'20%'} height={'90px'}></img></marquee>
     <br/>
     <div className='container'>
    <div className='row'> 
    <div className='col-sm-12 col-lg-6 col-md-6 mt-4 text-light' id='market'>
        <img src='https://www.digitalnexa.com/hs-fs/hubfs/digital-marketing-1.png?width=64&height=64&name=digital-marketing-1.png' className='mt-4'></img>
        <h4 className='mt-4' id='pen'>Digital Marketing Strategy</h4>
        <h5 className='mt-4'>In today's digital age robust Digital Marketing Strategy</h5>
         <h5>essential for business seeking make a significant impact</h5>
         <h5> online.</h5>
         <br/>
         <h5>Our approach involves a deep understanding of your</h5>
          <h5>market, and objectives, enabling us to craft bespoke</h5>
           <h5>that resonate with your target audience. We focus on</h5>
           <h5>the latest digital tools and analytics to create a</h5>
            <h5>plan that encompasses various digital channels. Our </h5>
             <h5>drive meaningful engagement, enhance your online</h5>
             <h5>and deliver measurable results that contribute to the</h5>
              <h5>success of your business.</h5> 
              <br/>
              <h5>Let us guide your digital journey  expert strategy</h5>
               <h5>formulation</h5>
               <button className='btn btn' id='or'>Get In Touch</button>
        </div>
        <div className='col-sm-12 col-lg-6 col-md-6 mt-4 text-light' id='market'>
        <img src='https://www.digitalnexa.com/hs-fs/hubfs/market.png?width=64&height=64&name=market.png' className='mt-4'></img>
        <h4 className='mt-4' id='pen'>Go to Market Strategy</h4>
        <h5 className='mt-4'>Launching a product or entering a new market requires</h5>
        <h5>defined Go-to-Market (GTM) Strategy. Our specializes in</h5>
         <h5>developing GTM strategies that are meticulously tailored </h5>
         <h5>unique business goals. </h5>
         <br/>
         <h5>We begin by conducting in-depth market research,</h5>
          <h5>competition, and identifying key opportunities. approach</h5>
          <h5> includes comprehensive market segmentation, pricing</h5>
          <h5>strategies, distribution channel selection, and marketing</h5>
          <h5> ensure a successful market entry. With our GTM strategies,</h5>
            <h5>can confidently introduce your offerings to the right</h5>
            <h5>optimize revenue generation, and establish a strong</h5> 
            <h5>presence.</h5>
            <br/>
            <h5>Let us be your trusted partner in devising winning</h5>
            <button className='btn btn' id='or'>Get In Touch</button>
            </div> 
    </div>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-lg-6 col-md-6 mt-4 text-light' id='market'>
        <img src='https://www.digitalnexa.com/hs-fs/hubfs/branding-1.png?width=64&height=64&name=branding-1.png' className='mt-4'></img>
        <h4 className='mt-4' id='pen'>Internal Branding Consultancy</h4>
        <h5 className='mt-4'>Elevate your organization with our Internal</h5>
        <h5>defined Go-to-Market (GTM) Strategy. Our team</h5>
         <h5>developing GTM strategies that are  gtm agree</h5>
         <h5>and employee engagement to create tailored </h5>
         <br/>
         <h5>Our approach involves psychology-backed  and,</h5>
          <h5>competition, and identifying key opportunitiesthe </h5>
          <h5> includes comprehensive market segmentation, market</h5>
          <h5>strategies, distribution channel selection, and did</h5>
          <h5> ensure a successful market entry. With strategies</h5>
            <h5>can confidently introduce your offerings to  audience,</h5>
            <h5>optimize revenue generation,  establish a strong market</h5> 
            <h5>internal branding.</h5>
            <button className='btn btn' id='or'>Get In Touch</button>
        </div>
        <div className='col-sm-12 col-lg-6 col-md-6 mt-4 text-light' id='market'>
        <img src='https://www.digitalnexa.com/hs-fs/hubfs/market-research.png?width=64&height=64&name=market-research.png' className='mt-4'></img>
        <h4 className='mt-4'id='pen' >Strategic Market Studies</h4>
        <h5 className='mt-4'>In today's dynamic business landscape, staying ahead of</h5>
        <h5>defined Go-to-Market (GTM) Strategy. Our team specializes</h5>
         <h5>developing GTM strategies that are meticulously tailored to </h5>
         <h5>uncover key trends, opportunities, and threats.</h5>
         <br/>
         <h5>Our team goes beyond surface-level data to provide you</h5>
          <h5>competition, and identifying key opportunities. Our </h5>
          <h5> includes comprehensive market segmentation, pricing</h5>
          <h5>strategies, distribution channel selection, and marketing</h5>
          <h5> ensure a successful market entry. With our GTM strategies, you</h5>
            <h5>can confidently introduce your offerings to the right </h5>
            <h5>optimize revenue generation, and establish a strong </h5> 
            <h5>with the strategic market studies</h5>
            <button className='btn btn' id='or'>Get In Touch</button>
        </div>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-lg-6 col-md-6 mt-4 text-light' id='market'>
    <img src='https://www.digitalnexa.com/hs-fs/hubfs/ads-campaign.png?width=64&height=64&name=ads-campaign.png' className='mt-4'></img>
    <h4 className='mt-4' id='pen'>Campaign Strategy</h4>
    <h5 className='mt-4'>Crafting impactful campaigns that resonate with your </h5>
        <h5>defined Go-to-Market (GTM) Strategy. Our team specializes</h5>
         <h5>developing GTM strategies that are meticulously tailored to</h5>
         <h5>drive engagement and conversions.</h5>
         <br/>
         <h5></h5>
          <h5>We start by defining clear objectives and target demo</h5>
          <h5> includes comprehensive market segmentation, pricing</h5>
          <h5>strategies, distribution channel selection,marketing plans to</h5>
          <h5> ensure a successful market entry. With our GTM strategies, you</h5>
            <h5>can confidently introduce your offerings to the right </h5>
            <h5>optimize revenue generation, and establish a strong</h5> 
            <h5>visibility and imapct </h5>
            <br/>
            <h5>Let's collaborate to bring your campaigns to life.</h5>
            <button className='btn btn' id='or'>Get In Touch</button>
          </div>
    <div className='col-sm-12 col-lg-6 col-md-6 mt-4 text-light' id='market'>
        <img src='https://www.digitalnexa.com/hs-fs/hubfs/market-research.png?width=64&height=64&name=market-research.png' className='mt-5'></img>
        <h4 className='mt-4' id='pen'>Strategic Market Studies</h4>
        <h5 className='mt-4'>Crafting impactful campaigns that resonate with your </h5>
        <h5>defined Go-to-Market (GTM) Strategy. Our team specializes</h5>
         <h5>developing GTM strategies that are meticulously tailored to</h5>
         <h5>uncover key trends, opportunities, and threats.</h5>
         <br/>

          <h5>Our team goes beyond surface-level data to provide you</h5>
          <h5> includes comprehensive market segmentation, pricing</h5>
          <h5>strategies, distribution channel selection, and marketing</h5>
          <h5> ensure a successful market entry. With our GTM strategies,</h5>
            <h5>can confidently introduce your offerings to the right</h5>
            <h5>optimize revenue generation, and establish a strong </h5>
            <h5>with the strategic market studies</h5> 
            <button className='btn btn' id='or'>Get In Touch</button>
    </div>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-lg-6 col-md-6 mt-4 text-light' id='pen' data-aos="fade-up">
    <h1 className='mt-4' id='pen'>Our Methodology: The </h1>
        <h1 id='pen'>Cognition Brain</h1>
        <h5 className='mt-4' >The Cognition Brain encompasses three essential systems</h5>
            <h5> and Engagement. These systems mirror fundamental</h5>
              <h5>processes that shape decision-makingTheyrepresent the</h5>
              <h5>disciplines of Science, Storytelling, and Our scientifically</h5>
              <h5> rigorous and commercially impactful approach Cognition</h5>
               <h5> Brain to develop strategies that boost brand awareness,</h5>
               <h5>improve products, enhance online engagement structure</h5>
                 <h5>campaigns.</h5>
                 <br/>
                 <button className='btn btn text-center mt-2' id='lg' >Get In Touch</button>
              
        </div>
        <div className='col-sm-12 col-lg-6 col-md-6 mt-4 text-light' id='gun'>
        <img src='https://www.digitalnexa.com/hubfs/Capture-Jan-23-2024-11-37-43-9825-AM.jpg' data-aos="fade-left"></img>
        </div>
    </div>
    </div>
    <h1 className='text-center' id='hub'>The Cognition Scientific Board</h1>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
    <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/Dr%20Peter%20Hughes%20circle.png' width={'60%'} height={'200px'}></img>
    <h5 className='mt-4'>Dr. Peter Hughes</h5>
    <h6 id='rose'>Psychologist</h6>
    <br/>
    <p id='rose'>Learn More</p>
    </div>
    <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
    <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/Dr.%20Carl%20Senior%20circle.png' width={'60%'} height={'200px'}></img>
    <div><h5 className='mt-4'>Dr. Carl Senior</h5>
    <h5 id='rose'>Behavioural Scientist</h5>
    <br/>
    <p>Learn More</p></div>
    </div>
    <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
        <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/Georgia%20Alexandrou%20circle.png' width={'60%'} height={'200px'}></img>
        <div><h5 className='mt-3'>Georgia Alexandrou</h5>
        <h5 id='rose'>Neuroscientist</h5>
        <br/>
    <p>Learn More</p></div>
    </div>
    <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
    <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/Sylvia%20Wong%20circle.png' width={'60%'} height={'200px'}></img>
    <div><h5 className='mt-3'>Dr. Sylvia Wong</h5>
    <h5 id='rose'>Computer Scientist & Software Engineer</h5>
    <br/>
    <p>Learn More</p></div>
    </div>
    </div>
    </div>
      <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
    <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/Prof.%20Adrian%20Burgess%20circle.png' width={'60%'} height={'200px'}/>
    <h5 className='mt-3'>Prof. Adrian Burgess</h5>
    <h5 id='rose'>Psychologist & Cognitive Neuroscientist</h5>
    <br/>
    <p>Learn More</p>
    </div>
    <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
    <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/James%20Reynolds%20circle.png' width={'60%'} height={'200px'}/>
    <h5 className='mt-3'>Dr. James Reynolds</h5>
    <h5 id='rose'>Behavioural Scientist</h5>
    <br/>
    <p>Learn More</p>
    </div>
    <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
   <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/Kani%20circle.png' width={'60%'} height={'200px'}/>
   <h5 className='mt-4'>Dr. Kanimozhi Narayanan</h5>
   <h5 id='rose'>Organsiational Psychologist</h5>
   <br/>
   <p>Learn More</p>
    </div>
    <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
    <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/Charlotte%20Pennington%20circle.png' width={'60%'} height={'200px'}/>
    <h5 className='mt-4'>Dr. Charlotte Pennington</h5>
    <h5 id='rose'>Social Psychologist</h5>
    <br/>
    <p>Learn More</p>
    </div>
    </div>
    </div>
     <div className='container'> 
    <div className='row'>
    <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
        <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/Daniel%20Shaw%20circle.png' width={'60%'} height={'200px'}></img>
        <h5 className='mt-4'>Dr. Daniel J. Shaw</h5>
        <h5 id='rose'>Cognitive Neuroscientist</h5>
        <br/>
        <p>Learn More</p>
        </div>
        <div className='col-sm-12 col-lg-3 col-md-3 mt-4 text-light'>
        <img src='https://www.digitalnexa.com/hubfs/Cognition%20Team/Nick%20Lee%20circle.png' width={'60%'} height={'200px'}></img>
        <h5 className='mt-4'>Professor Nick Lee</h5>
        <h5 id='rose'>Professor of Sales & Marketing</h5>
        <br/>
        <p>Learn More</p>
        </div>
        </div>
        </div>
     
          <OwlCarousel items={3} margin={8} autoplay ={true}  nav dots loop>  
        <div><div class="card">
  <img src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/shutterstock_327579902-min-1.jpg?width=800&name=shutterstock_327579902-min-1.jpg" width={'100%'} height={'300px'} id='fit'/>
  <div class="card-body">
    <h5 class="card-title">Unlocking Growth with Strategic Market Studies</h5>
  <p>March 14, 2024</p>
    
  </div>
</div></div> 
           <div>
            <div class="card">
  <img src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/shutterstock_2065234757-min-1.jpg?width=800&name=shutterstock_2065234757-min-1.jpg" class="card-img-top" alt="..." width={'100%'} height={'300px'} id='fit'/>
  <div class="card-body">
    <h5 class="card-title">The Essential Guide to Internal Branding Consultancy by NEXA</h5>
    <h6> march 19 2024</h6>
  </div>
</div></div> 
           <div>
           <div class="card">
  <img src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/shutterstock_575844202-min-3.jpg?width=800&name=shutterstock_575844202-min-3.jpg" class="card-img-top" alt="..." width={'100%'} height={'300px'} id='fit'/>
  <div class="card-body">
    <h5 class="card-title"> consult
Mastering the Digital Realm with a Robust Content Strategy</h5>
    <h6>March 29, 2024</h6>
  </div>
</div>
            </div>   
         
      </OwlCarousel> 
      <div data-aos="fade-up">
      <h1 className='text-center text-light'>Get In Touch</h1>
      <h6 className='text-center text-light'>Ready to elevate your marketing strategies to the next level with Nexa Consult? We'd love to hear from you. Feel free to reach out to us with any questions or to discuss how</h6>
      <h6 className='text-center text-light'>our strategic expertise can benefit your business. Your success is our priority, and we're here to help you achieve it.</h6 ></div>
      <h6 className='text-center text-light'>Get In Touch </h6>

      <br/>
      <div className='container'>
      <div className='row'>
      <div className='col-sm-12 col-lg-10 col-md-10'>
      <img src='https://www.digitalnexa.com/hs-fs/hubfs/Digital%20Nexa/Home/Logo/BRC_NEXA_LOGO_WHITE%20(2)%20(1).png?width=393&height=88&name=BRC_NEXA_LOGO_WHITE%20(2)%20(1).png' width={'20%'}></img>
    </div>
    <div className='col-sm-12 col-md-2 col-lg-2 text-light'>
    <span><i class="fa-brands fa-facebook-f" id='mirror'></i></span>
   <span><i class="fa-brands fa-linkedin-in" id='mirror'></i></span>
   <span><i class="fa-brands fa-instagram" id='mirror'></i></span>
   <span><i class="fa-brands fa-x-twitter" id='mirror'></i></span>
   <span><i class="fa-brands fa-youtube" id='mirror'></i></span>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Consultancy