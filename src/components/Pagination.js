import React from 'react';

const Pagination = (props) => {

   const pagesLinks = [];

   for (let i = 1; i <= props.pages + 1; i++) {
      let active = props.currentPage == i ? 'active' : '';

      pagesLinks.push(<li className={`li-dots ${active}`} key={i} onClick={() => props.nextPage(i)}><a className='prickar' href='#'>•</a></li>);
   }

   return (
      <div className="page-container">
         <div className="row">
            <ul className="pagination">
               {pagesLinks}
            </ul>
         </div>
      </div>
   );
};

export default Pagination;
