import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = ({type}) => {
  return (
    

    <div className="categories">
      
       
      <div className="col">
        <div className="row">
       
          <img
            src="https://i.pinimg.com/564x/f4/f6/6f/f4f66f25ed396bd82166e3097108f1c3.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://i.pinimg.com/564x/6b/a2/de/6ba2de062bdf3a34989a037ddecbad81.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              BIRDS
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://i.pinimg.com/564x/4c/49/1b/4c491beca5200c49aa1e949ddb9e69ca.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.pinimg.com/564x/c3/e2/68/c3e268b2b23925e4be03d1aa572fc870.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  TURTLE
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://i.pinimg.com/564x/e4/1f/3c/e41f3c32dc9c6ad57e2ac4e2f6f019af.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                PETS CLOTHES
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://i.pinimg.com/564x/f9/5d/b8/f95db8e3cd56c14739f55702181a66ff.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              FOOD
            </Link>
          </button>
        </div>
      </div>
    </div>
   
  );
};

export default Categories;