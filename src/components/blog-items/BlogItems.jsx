// ======================== import Scss ======================== //
import "./blog-items.scss";
// ======================== import Icons ======================== //
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
// ======================== import Img ======================== //
import blog1 from "../../img/blog/blog1.jpg";
import blog2 from "../../img/blog/blog2.jpg";
import blog3 from "../../img/blog/blog3.jpg";
import blog4 from "../../img/blog/blog4.jpg";
import blog5 from "../../img/blog/blog5.jpg";
import recent1 from "../../img/recent1.jpg";
import recent2 from "../../img/recent2.jpg";
import recent3 from "../../img/recent3.jpg";
import recent4 from "../../img/recent4.jpg";
import insta1 from "../../img/insta1.jpg";
import insta2 from "../../img/insta2.jpg";
import insta3 from "../../img/insta3.jpg";
import insta4 from "../../img/insta4.jpg";
import insta5 from "../../img/insta5.jpg";
import insta6 from "../../img/insta6.jpg";

const BlogItems = () => {
  return (
    <>
      <div className="blogItems container">
        <div className="blogItems_main">
          <div className="blogItems_main_items">
            <div className="blogItems_main_items_img">
              <img src={blog1} alt="blog1" />
              <div className="blogItems_main_items_img_data">
                <h3>15</h3>
                <p>Jan</p>
              </div>
            </div>
            <div className="blogItems_main_items_text">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
            </div>
            <div className="blogItems_main_items_info">
              <div className="blogItems_main_items_info_item">
                <i>{<FaUserAlt />}</i>
                <span>Travel, Lifestyle</span>
              </div>

              <div className="blogItems_main_items_info_item">
                <i>{<FaComments />}</i>
                <span>03 Comments</span>
              </div>
            </div>
          </div>

          <div className="blogItems_main_items">
            <div className="blogItems_main_items_img">
              <img src={blog2} alt="blog2" />
              <div className="blogItems_main_items_img_data">
                <h3>3</h3>
                <p>Feb</p>
              </div>
            </div>
            <div className="blogItems_main_items_text">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
            </div>
            <div className="blogItems_main_items_info">
              <div className="blogItems_main_items_info_item">
                <i>{<FaUserAlt />}</i>
                <span>Travel, Lifestyle</span>
              </div>

              <div className="blogItems_main_items_info_item">
                <i>{<FaComments />}</i>
                <span>06 Comments</span>
              </div>
            </div>
          </div>

          <div className="blogItems_main_items">
            <div className="blogItems_main_items_img">
              <img src={blog3} alt="blog3" />
              <div className="blogItems_main_items_img_data">
                <h3>12</h3>
                <p>Jun</p>
              </div>
            </div>
            <div className="blogItems_main_items_text">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
            </div>
            <div className="blogItems_main_items_info">
              <div className="blogItems_main_items_info_item">
                <i>{<FaUserAlt />}</i>
                <span>Travel, Lifestyle</span>
              </div>

              <div className="blogItems_main_items_info_item">
                <i>{<FaComments />}</i>
                <span>04 Comments</span>
              </div>
            </div>
          </div>

          <div className="blogItems_main_items">
            <div className="blogItems_main_items_img">
              <img src={blog4} alt="blog4" />
              <div className="blogItems_main_items_img_data">
                <h3>20</h3>
                <p>Dec</p>
              </div>
            </div>
            <div className="blogItems_main_items_text">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
            </div>
            <div className="blogItems_main_items_info">
              <div className="blogItems_main_items_info_item">
                <i>{<FaUserAlt />}</i>
                <span>Travel, Lifestyle</span>
              </div>

              <div className="blogItems_main_items_info_item">
                <i>{<FaComments />}</i>
                <span>08 Comments</span>
              </div>
            </div>
          </div>

          <div className="blogItems_main_items">
            <div className="blogItems_main_items_img">
              <img src={blog5} alt="blog5" />
              <div className="blogItems_main_items_img_data">
                <h3>25</h3>
                <p>Dec</p>
              </div>
            </div>
            <div className="blogItems_main_items_text">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
            </div>
            <div className="blogItems_main_items_info">
              <div className="blogItems_main_items_info_item">
                <i>{<FaUserAlt />}</i>
                <span>Travel, Lifestyle</span>
              </div>

              <div className="blogItems_main_items_info_item">
                <i>{<FaComments />}</i>
                <span>09 Comments</span>
              </div>
            </div>
          </div>
        </div>

        <div className="blogItems_sidebar">
          {/* ========================== Search ========================== */}
          <div className="blogItems_sidebar_widget">
            <div className="blogItems_sidebar_widget_searchitems">
              <input type="text" placeholder="Search Keyword" />
              <div className="icon">
                <i>{<FaSearch />}</i>
              </div>
            </div>
            <button>Search</button>
          </div>
          {/* ========================== Category ========================== */}
          <div className="blogItems_sidebar_widget">
            <h3 className="blogItems_sidebar_widget_title">Category</h3>

            <div className="blogItems_sidebar_widget_categoryitems">
              <ul>
                <li>Resaurant food (37)</li>
                <li>Travel news (10)</li>
                <li>Modern technology (03)</li>
                <li>Product (11)</li>
                <li>Inspiration (21)</li>
                <li>Health Care (09)</li>
              </ul>
            </div>
          </div>
          {/* ========================== Recent Post ========================== */}
          <div className="blogItems_sidebar_widget">
            <h3 className="blogItems_sidebar_widget_title">Recent Post</h3>

            <div className="blogItems_sidebar_widget_recentitems">
              <img src={recent1} alt="recent1" />
              <div className="blogItems_sidebar_widget_recentitems_info">
                <span>From life was you fish...</span>
                <p>January 12, 2019</p>
              </div>
            </div>

            <div className="blogItems_sidebar_widget_recentitems">
              <img src={recent2} alt="recent2" />
              <div className="blogItems_sidebar_widget_recentitems_info">
                <span>From life was you fish...</span>
                <p>January 12, 2019</p>
              </div>
            </div>

            <div className="blogItems_sidebar_widget_recentitems">
              <img src={recent3} alt="recent3" />
              <div className="blogItems_sidebar_widget_recentitems_info">
                <span>From life was you fish...</span>
                <p>January 12, 2019</p>
              </div>
            </div>

            <div className="blogItems_sidebar_widget_recentitems">
              <img src={recent4} alt="recent4" />
              <div className="blogItems_sidebar_widget_recentitems_info">
                <span>From life was you fish...</span>
                <p>January 12, 2019</p>
              </div>
            </div>
          </div>
          {/* ========================== Tag Clouds ========================== */}
          <div className="blogItems_sidebar_widget">
            <h3 className="blogItems_sidebar_widget_title">Tag Clouds</h3>
            <div className="blogItems_sidebar_widget_cloudsitems">
              <ul>
                <li>project</li>
                <li>love</li>
                <li>technology</li>
                <li>travel</li>
                <li>resaurant</li>
                <li>life style</li>
                <li>design</li>
                <li>illustration</li>
              </ul>
            </div>
          </div>
          {/* ========================== Instagram Feeds ========================== */}
          <div className="blogItems_sidebar_widget">
            <h3 className="blogItems_sidebar_widget_title">Instagram Feeds</h3>
            <div className="blogItems_sidebar_widget_instaitems">
              <img src={insta1} alt="insta1" />
              <img src={insta2} alt="insta2" />
              <img src={insta3} alt="insta3" />
              <img src={insta4} alt="insta4" />
              <img src={insta5} alt="insta5" />
              <img src={insta6} alt="insta6" />
            </div>
          </div>
          {/* ========================== Newsletter ========================== */}
          <div className="blogItems_sidebar_widget">
            <h3 className="blogItems_sidebar_widget_title">Newsletter</h3>
            <div className="blogItems_sidebar_widget_searchitems newsitems">
              <input type="email" placeholder="Enter email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItems;
