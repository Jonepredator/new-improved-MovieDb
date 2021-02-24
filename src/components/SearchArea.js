import React from 'react';

const SearchArea = (props) => {
   return (
      <>
         <div className="row">
            <section className='container'>
               <h2>Search your favorite movie here</h2>
               <form action="" onSubmit={props.handleSubmit} >
                  <div>
                     <input
                        className='search'
                        placeholder='Search movie...'
                        type="text"
                        onChange={props.handleChange}
                     />
                  </div>
               </form>
            </section>
         </div>
      </>
   );
};

export default SearchArea;
