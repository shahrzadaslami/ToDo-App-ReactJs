import React from 'react';

const Header = ({}) =>{
    return(
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Planner</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>   
            <img className="logo" src="/logo.png" alt="" />
            <div className="text pt-2">
                <h1>Get it right this time</h1>
            </div>
            <div className="boxes">
                <a href="">
                    <div className="box m-1">
                    <img src="/list.png" alt="" />
                    </div>
                </a>
                <a href="">
                    <div className="box m-1">
                    <img src="/note.png" alt="" />
                    </div>
                </a>
                <a href="">
                    <div className="box m-1">
                    <img src="/timer.png" alt="" />
                    </div>
                </a>
            </div>
      </div>
    );
}

export default Header;